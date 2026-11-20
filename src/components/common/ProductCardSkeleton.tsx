function ProductCardSkeleton() {
  return (
    <div className="rounded-card overflow-hidden bg-navy-light aspect-[4/5]">
      <div className="aspect-w-5 aspect-h-5 bg-border-blue rounded-tlg" />
      <div className="p-3">
        <div className="h-6 bg-border-blue rounded w-full mb-2" />
        <div className="h-4 bg-border-blue rounded w-full/2 mb-1" />
        <div className="h-4 bg-border-blue rounded w-full/3 mb-1" />
      </div>
    </div>
  );
}

export default ProductCardSkeleton;