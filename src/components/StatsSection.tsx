const StatsSection = () => {
  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Support That Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by merchants worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              under 1hr
            </div>
            <div className="text-sm text-muted-foreground">
              Average Response
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              24/7
            </div>
            <div className="text-sm text-muted-foreground">
              Live Support Available
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              99.2%
            </div>
            <div className="text-sm text-muted-foreground">
              Satisfaction Rate
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              50K+
            </div>
            <div className="text-sm text-muted-foreground">
              Merchants Helped
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection