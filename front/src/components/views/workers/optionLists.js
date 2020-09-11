const positions = [
    { value: -1, label: "Choose worker position" },
    { value: "Weld", label: "Welder" },
    { value: "Fit", label: "Fitter" },
    { value: "Help", label: "Helper" },
    { value: "Rig", label: "Rigger" },
    { value: "SafeOff", label: "Safety Officer" },
    { value: "Plumb", label: "Plumber" },
    { value: "Tech", label: "Technician" },
    { value: "Electr", label: "Electrician" },
    { value: "FlrInst", label: "Flooring Installer" },
    { value: "HVACInst", label: "HVAC Installer" },
    { value: "InsInst", label: "Insulation Installer" },
    { value: "Surv", label: "Surveyor" },
    { value: "BrcMans", label: "Brick Manson" },
    { value: "Roof", label: "Roofer" },
    { value: "SiteSuper", label: "Site Supervisor" },
    { value: "Other", label: "Other" }
]

const tradeCompetencies = [
    { id: -1, position: "Choose trade competency" },
    { id: "Civ", position: "Civil" },
    { id: "Electr", position: "Electrical" },
    { id: "Mech", position: "Mechanical" },
    { id: "Infra", position: "Infra" },
    { id: "Gen", position: "General" },
    { id: "Safe", position: "Safety" },
    { id: "Secur", position: "Security" },
]


export { positions, tradeCompetencies }