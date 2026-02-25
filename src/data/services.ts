import type { Service } from '../types'
import AcRepairIcon from '../icons/AcRepairIcon'
import InstallationIcon from '../icons/InstallationIcon'
import MaintenanceIcon from '../icons/MaintenanceIcon'
import DuctIcon from '../icons/DuctIcon'
import DuctCleaningIcon from '../icons/DuctCleaningIcon'
import MiniSplitIcon from '../icons/MiniSplitIcon'
import CommercialIcon from '../icons/CommercialIcon'
import HeatPumpIcon from '../icons/HeatPumpIcon'
import AirQualityIcon from '../icons/AirQualityIcon'
import ThermostatIcon from '../icons/ThermostatIcon'
import NewConstructionIcon from '../icons/NewConstructionIcon'

export const services: Service[] = [
  {
    id: 'ac-repair',
    title: 'AC Repair',
    description: 'Fast, reliable air conditioning repairs to restore your comfort. We diagnose and fix all makes and models — same-day service available.',
    icon: AcRepairIcon,
    slug: 'ac-repair',
    keywords: ['AC repair Kissimmee', 'air conditioner repair Orlando', 'HVAC repair Central Florida'],
  },
  {
    id: 'ac-installation',
    title: 'AC Installation',
    description: 'Expert installation of high-efficiency air conditioning systems for new builds and replacements. We carry top brands including Carrier, Trane, and Lennox.',
    icon: InstallationIcon,
    slug: 'ac-installation',
    keywords: ['AC installation Kissimmee', 'air conditioner installation Orlando', 'new AC unit Central Florida'],
  },
  {
    id: 'ac-maintenance',
    title: 'AC Maintenance',
    description: 'Preventive tune-ups and seasonal maintenance to keep your system running at peak efficiency. Reduce breakdowns and extend equipment lifespan.',
    icon: MaintenanceIcon,
    slug: 'ac-maintenance',
    keywords: ['AC maintenance Kissimmee', 'HVAC tune-up Orlando', 'air conditioner service Florida'],
  },
  {
    id: 'air-duct-installation',
    title: 'Air Duct Installation',
    description: 'Professional duct design and installation with 10+ years of hands-on expertise. Proper airflow is the foundation of an efficient HVAC system.',
    icon: DuctIcon,
    slug: 'air-duct-installation',
    keywords: ['duct installation Kissimmee', 'air duct installation Orlando', 'HVAC ductwork Florida'],
  },
  {
    id: 'air-duct-cleaning',
    title: 'Air Duct Cleaning',
    description: 'Thorough cleaning of your ductwork to remove dust, allergens, and debris. Improve indoor air quality and system efficiency in one service.',
    icon: DuctCleaningIcon,
    slug: 'air-duct-cleaning',
    keywords: ['duct cleaning Kissimmee', 'air duct cleaning Orlando', 'ductwork cleaning Central Florida'],
  },
  {
    id: 'mini-split',
    title: 'Mini-Split Systems',
    description: 'Ductless mini-split installation and service for targeted room-by-room cooling. Perfect for additions, garages, and spaces without existing ductwork.',
    icon: MiniSplitIcon,
    slug: 'mini-split',
    keywords: ['mini split installation Kissimmee', 'ductless AC Orlando', 'mini split system Florida'],
  },
  {
    id: 'commercial-hvac',
    title: 'Commercial HVAC',
    description: 'Full-scale commercial HVAC services from rooftop units to large chiller systems. We\'ve handled projects including 20-ton commercial chiller replacements.',
    icon: CommercialIcon,
    slug: 'commercial-hvac',
    keywords: ['commercial HVAC Kissimmee', 'commercial air conditioning Orlando', 'commercial HVAC contractor Florida'],
  },
  {
    id: 'heat-pump',
    title: 'Heat Pump Services',
    description: 'Installation, repair, and maintenance for heat pump systems. Year-round comfort with energy-efficient heating and cooling in one unit.',
    icon: HeatPumpIcon,
    slug: 'heat-pump',
    keywords: ['heat pump installation Kissimmee', 'heat pump repair Orlando', 'heat pump service Florida'],
  },
  {
    id: 'indoor-air-quality',
    title: 'Indoor Air Quality',
    description: 'UV purifiers, air filtration, humidity control, and ventilation solutions to ensure the air inside your home or business is clean and healthy.',
    icon: AirQualityIcon,
    slug: 'indoor-air-quality',
    keywords: ['indoor air quality Kissimmee', 'air purifier installation Orlando', 'IAQ solutions Florida'],
  },
  {
    id: 'thermostat',
    title: 'Smart Thermostat',
    description: 'Upgrade to a smart thermostat for precise temperature control, energy savings, and remote access. We install and program all major brands.',
    icon: ThermostatIcon,
    slug: 'thermostat',
    keywords: ['smart thermostat installation Kissimmee', 'thermostat upgrade Orlando', 'Nest Ecobee installation Florida'],
  },
  {
    id: 'new-construction',
    title: 'New Construction',
    description: 'Complete HVAC system design and installation for new construction projects. We work with contractors and homeowners from blueprint to final inspection.',
    icon: NewConstructionIcon,
    slug: 'new-construction',
    keywords: ['new construction HVAC Kissimmee', 'HVAC new build Orlando', 'new construction air conditioning Florida'],
  },
]
