const DATASETS = [
{
    id: "ipcc-atlas",
    title: "IPCC WGI Atlas",
    resource_class: "dataset",
    type: "Climate projections",
    provider: "IPCC",
    source_type: "climate model ensemble",
    hazards: ["drought", "flood", "heat", "storm", "precipitation", "sea_level_rise"],
    use_cases: ["portfolio_stress"],
    formats: ["NetCDF", "PNG", "GeoTIFF"],
    coverage: "Global",
    temporal: "1981 - 2100",
    access: "Open Access",
    tags: ["climate scenarios", "temperature", "precipitation", "heat", "wind"],
    description: "Tool combining several climate projection models (CMIP, CORDEX) and past observations, for flexible spatial and temporal analyses. It comprises global and regional specific tools and datasets, and multiple variables. Based on the Working Group I contribution to the Sixth Assessment Report. It includes regional synthesis.",
    variables: [
      "Temperature",
      "Frost Days",
      "Sea level rise",
      "Precipitation",
      "Wind",
      "Humidity",
      "Snowfall",
    ],
    links: [
      { label: "Atlas", url: "https://interactive-atlas.ipcc.ch/" }
    ]
  },
  {
    id: "wri-aqueduct",
    title: "WRI Aqueduct Water Risk Framework",
    resource_class: "framework",
    type: "Water risk indicators",
    provider: "World Resources Institute (WRI)",
    source_type: "model + composite index",
    hazards: ["drought", "water_stress"],
    use_cases: ["credit_risk", "portfolio_stress"],
    formats: ["GIS", "Raster", "CSV"],
    coverage: "Global",
    temporal: "Present & Future (2030, 2050, 2080)",
    access: "Open Access",
    tags: ["water stress", "water risk", "future projections"],
    description: "Uses 13 water risk indicators including baseline water stress, water depletion, and interannual variability. Based on PCR-GLOBWB 2 hydrological model and CMIP6 scenarios.",
    variables: [
      "Baseline water stress",
      "Water depletion",
      "Interannual variability",
      "Seasonal variability",
      "Groundwater depletion"
    ],
    links: [
      { label: "Data portal", url: "https://www.wri.org/data/aqueduct-water-risk-atlas" },
      { label: "Interactive map", url: "https://www.wri.org/applications/aqueduct/water-risk-atlas/" }
    ]
  },

  {
    id: "thinkhazard",
    title: "ThinkHazard!",
    resource_class: "tool",
    type: "Multi-hazard risk screening",
    provider: "World Bank / GFDRR",
    source_type: "aggregated hazard screening",
    hazards: ["flood", "drought", "heat", "cyclone", "landslide"],
    use_cases: ["credit_risk", "branch_risk"],
    formats: ["Web tool"],
    coverage: "Global (country / subnational)",
    temporal: "Current climate",
    access: "Open Access",
    tags: ["multi-hazard", "screening", "risk levels"],
    description: "Provides simplified hazard exposure levels (low/medium/high) for multiple climate risks. Designed for rapid screening of infrastructure and investments.",
    variables: [
      "Flood risk level",
      "Drought risk level",
      "Extreme heat risk",
      "Cyclone risk",
      "Landslide risk"
    ],
    links: [
      { label: "Tool", url: "https://thinkhazard.org" }
    ]
  },

  {
    id: "chirps",
    title: "CHIRPS Rainfall Dataset",
    resource_class: "dataset",
    type: "Precipitation",
    provider: "Climate Hazards Group (UCSB)",
    source_type: "satellite + station blended",
    hazards: ["drought", "flood"],
    use_cases: ["agriculture", "credit_risk"],
    formats: ["GeoTIFF", "NetCDF"],
    coverage: "50°S–50°N",
    temporal: "1981 – Present",
    access: "Open Access",
    tags: ["rainfall", "drought", "agriculture"],
    description: "High-resolution rainfall dataset combining satellite imagery with in-situ station data. Widely used for drought monitoring and agricultural risk analysis.",
    variables: ["Precipitation (mm/day, mm/month)"],
    links: [
      { label: "Dataset", url: "https://www.chc.ucsb.edu/data/chirps" }
    ]
  },

  {
    id: "worldbank-portal",
    title: "World Bank Climate Change Knowledge Portal",
    resource_class: "platform",
    type: "Climate indicators",
    provider: "World Bank",
    source_type: "aggregated datasets",
    hazards: ["drought", "flood", "heat"],
    use_cases: ["credit_risk"],
    formats: ["CSV", "API", "Web"],
    coverage: "Global (country level)",
    temporal: "Historical & Future",
    access: "Open Access",
    tags: ["country data", "policy", "indicators"],
    description: "Provides country-level climate indicators including historical trends and future projections based on CMIP6 scenarios.",
    variables: [
      "Temperature change",
      "Precipitation change",
      "Extreme events indicators"
    ],
    links: [
      { label: "Portal", url: "https://climateknowledgeportal.worldbank.org" }
    ]
  },

  {
    id: "cmip6",
    title: "CMIP6 Climate Projections",
    resource_class: "model",
    type: "Climate projections",
    provider: "IPCC / CMIP6",
    source_type: "climate model ensemble",
    hazards: ["drought", "flood", "heat"],
    use_cases: ["portfolio_stress"],
    formats: ["NetCDF"],
    coverage: "Global",
    temporal: "1850 – 2100",
    access: "Open Access",
    tags: ["climate scenarios", "temperature", "precipitation"],
    description: "Global climate model ensemble used in IPCC AR6. Provides projections under SSP scenarios.",
    variables: [
      "Temperature",
      "Precipitation",
      "Wind",
      "Humidity"
    ],
    links: []
  },

  {
    id: "c3s-era5",
    title: "ERA5 Reanalysis (Copernicus C3S)",
    resource_class: "dataset",
    type: "Reanalysis",
    provider: "Copernicus Climate Change Service (ECMWF)",
    source_type: "reanalysis",
    hazards: ["heat", "storm", "flood"],
    use_cases: ["credit_risk", "portfolio_stress"],
    formats: ["NetCDF", "GRIB"],
    coverage: "Global",
    temporal: "1950 – Present",
    access: "Open Access + API",
    tags: ["temperature", "precipitation", "wind", "soil moisture"],
    description: "Global reanalysis dataset combining observations with models. Provides hourly data across multiple climate variables.",
    variables: [
      "Temperature",
      "Precipitation",
      "Wind speed",
      "Soil moisture"
    ],
    links: [
      { label: "Copernicus Climate Data Store", url: "https://cds.climate.copernicus.eu" }
    ]
  },

  {
    id: "spei",
    title: "Standardized Precipitation-Evapotranspiration Index (SPEI)",
    resource_class: "indicator",
    type: "Drought index",
    provider: "CSIC / SPEI Database",
    source_type: "derived index",
    hazards: ["drought"],
    use_cases: ["agriculture", "credit_risk"],
    formats: ["Raster"],
    coverage: "Global",
    temporal: "1901 – Present",
    access: "Open Access",
    tags: ["drought", "water balance"],
    description: "Multi-scalar drought index combining precipitation and evapotranspiration. Captures drought severity and duration.",
    variables: ["SPEI-1", "SPEI-3", "SPEI-6", "SPEI-12"],
    links: []
  },

  {
    id: "fwi",
    title: "Fire Weather Index (FWI)",
    resource_class: "indicator",
    type: "Wildfire risk",
    provider: "ECMWF / NASA",
    source_type: "weather-based index",
    hazards: ["wildfire"],
    use_cases: ["portfolio_stress"],
    formats: ["Raster"],
    coverage: "Global",
    temporal: "Historical & Near real-time",
    access: "Open Access",
    tags: ["fire", "wildfire"],
    description: "Measures fire danger based on weather conditions and fuel moisture.",
    variables: ["FWI", "FFMC", "DMC", "DC"],
    links: []
  },

  {
    id: "extreme-precip",
    title: "Extreme Precipitation Indicators",
    resource_class: "indicator",
    type: "Extreme rainfall",
    provider: "CMIP6 / TRMM / GPM",
    source_type: "satellite + model",
    hazards: ["flood"],
    use_cases: ["credit_risk", "branch_risk"],
    formats: ["Raster"],
    coverage: "Global",
    temporal: "1979 – Present & Future",
    access: "Open Access",
    tags: ["precipitation", "extreme events"],
    description: "Includes indices like R95p, Rx1day and Rx5day to quantify extreme rainfall intensity.",
    variables: ["R95p", "R99p", "Rx1day", "Rx5day"],
    links: [{
      label: "Copernicus Climate Data Store",
      url: "https://cds.climate.copernicus.eu/datasets/sis-european-risk-extreme-precipitation-indicators?tab=download"
    }]
  }

];