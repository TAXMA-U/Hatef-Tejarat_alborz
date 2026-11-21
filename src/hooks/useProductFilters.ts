import { useState, useCallback, useMemo } from 'react';
import type { Product } from '@/data/products';
import { findCategoryBySlug } from '@/data/categories';

type SortOption = 'relevance' | 'name' | 'newest';

type FilterState = {
  search: string;
  selectedMaterials: string[];
  selectedWorkCategories: string[];
  selectedCertifications: string[];
};

export function useProductFilters(
  products: Product[],
  initialFilters?: { category?: string; sub?: string; subsub?: string; industry?: string },
) {
  const [state, setState] = useState<FilterState>(() => {
    const initial: FilterState = {
      search: '',
      selectedMaterials: [],
      selectedWorkCategories: [],
      selectedCertifications: [],
    };
    if (initialFilters?.category) {
      const cat = findCategoryBySlug(initialFilters.category);
      if (cat) initial.selectedMaterials.push(cat.name);
      else initial.selectedMaterials.push(initialFilters.category);
    }
    if (initialFilters?.sub) {
      const sub = findCategoryBySlug(initialFilters.sub);
      if (sub) initial.selectedMaterials.push(sub.name);
      else initial.selectedMaterials.push(initialFilters.sub);
    }
    if (initialFilters?.subsub) {
      const subsub = findCategoryBySlug(initialFilters.subsub);
      if (subsub) initial.selectedMaterials.push(subsub.name);
      else initial.selectedMaterials.push(initialFilters.subsub);
    }
    if (initialFilters?.industry) {
      const industryName = initialFilters.industry.replace(/-/g, ' ');
      initial.selectedWorkCategories.push(industryName);
    }
    return initial;
  });

  const [sortBy, setSortBy] = useState<SortOption>('relevance');

  const setSearch = useCallback((query: string) => {
    setState((prev) => ({ ...prev, search: query }));
  }, []);

  const toggleMaterial = useCallback((material: string) => {
    setState((prev) => {
      const next = prev.selectedMaterials.includes(material)
        ? prev.selectedMaterials.filter((m) => m !== material)
        : [...prev.selectedMaterials, material];
      return { ...prev, selectedMaterials: next };
    });
  }, []);

  const toggleWorkCategory = useCallback((category: string) => {
    setState((prev) => {
      const next = prev.selectedWorkCategories.includes(category)
        ? prev.selectedWorkCategories.filter((c) => c !== category)
        : [...prev.selectedWorkCategories, category];
      return { ...prev, selectedWorkCategories: next };
    });
  }, []);

  const toggleCertification = useCallback((cert: string) => {
    setState((prev) => {
      const next = prev.selectedCertifications.includes(cert)
        ? prev.selectedCertifications.filter((c) => c !== cert)
        : [...prev.selectedCertifications, cert];
      return { ...prev, selectedCertifications: next };
    });
  }, []);

  const clearAllFilters = useCallback(() => {
    setState({ search: '', selectedMaterials: [], selectedWorkCategories: [], selectedCertifications: [] });
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (state.search.trim()) {
      const q = state.search.toLowerCase().trim();
      result = result.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.materialFamily.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.categoryPath.join(' ').toLowerCase().includes(q)
      );
    }

    if (state.selectedMaterials.length > 0) {
      result = result.filter((p) => {
        const pathStr = p.categoryPath.join(' > ').toLowerCase();
        const materialLower = p.materialFamily.toLowerCase();
        return state.selectedMaterials.some((filter) => {
          const filterLower = filter.toLowerCase();
          return pathStr.includes(filterLower) || materialLower.includes(filterLower);
        });
      });
    }

    if (state.selectedWorkCategories.length > 0) {
      result = result.filter((p) =>
        state.selectedWorkCategories.some((w) =>
          p.categoryPath.some((cat) => cat.toLowerCase().includes(w.toLowerCase()))
        )
      );
    }

    if (state.selectedCertifications.length > 0) {
      result = result.filter((p) => {
        const hasCert = p.contentBlocks.some((block) => {
          if (block.type === 'technicalSpecifications') {
            const content = block.content as { items: { label: string; value: string }[] };
            return content.items.some((item) =>
              state.selectedCertifications.some((c) =>
                item.value.toLowerCase().includes(c.toLowerCase()) ||
                item.label.toLowerCase().includes(c.toLowerCase())
              )
            );
          }
          return false;
        });
        return hasCert;
      });
    }

    if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'newest') {
      result.reverse();
    }

    return result;
  }, [products, state, sortBy]);

  const hasActiveFilters =
    state.selectedMaterials.length > 0 ||
    state.selectedWorkCategories.length > 0 ||
    state.selectedCertifications.length > 0 ||
    state.search.trim().length > 0;

  // All filtered products are shown at once — no pagination (22 products total).
  return {
    search: state.search,
    setSearch,
    selectedMaterials: state.selectedMaterials,
    selectedWorkCategories: state.selectedWorkCategories,
    selectedCertifications: state.selectedCertifications,
    toggleMaterial,
    toggleWorkCategory,
    toggleCertification,
    sortBy,
    setSortBy,
    visibleProducts: filteredProducts,
    filteredProducts,
    hasMore: false,
    isLoadingMore: false,
    hasActiveFilters,
    clearAllFilters,
    resultCount: filteredProducts.length,
    loadMoreRef: { current: null },
    loadMore: () => {},
  };
}