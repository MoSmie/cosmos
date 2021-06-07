export interface ICrewType {
  name?: string | null;
  agency?: string | null;
  image?: string | null;
  wikipedia?: string | null;
  launches?: Array<string> | null;
  status?: string | null;
  id?: string | null;
}

export interface ICapsulesType {
  id: string;
  land_landings: 0;
  last_update: string;
  launches: Array<string>;
  reuse_count: number;
  serial: string;
  status: string;
  type: string;
  water_landings: number;
}

export interface IStarlink {
  version: string;
  launch: string;
  longitude: number;
  latitude: number;
  height_km: number;
  velocity_kms: number;
  spaceTrack: {
    CCSDS_OMM_VERS: string;
    COMMENT: string;
    CREATION_DATE: string;
    ORIGINATOR: string;
    OBJECT_NAME: string;
    OBJECT_ID: string;
    CENTER_NAME: string;
    REF_FRAME: string;
    TIME_SYSTEM: string;
    MEAN_ELEMENT_THEORY: string;
    EPOCH: string;
    MEAN_MOTION: number;
    ECCENTRICITY: number;
    INCLINATION: number;
    RA_OF_ASC_NODE: number;
    ARG_OF_PERICENTER: number;
    MEAN_ANOMALY: number;
    EPHEMERIS_TYPE: number;
    CLASSIFICATION_TYPE: string | null;
    NORAD_CAT_ID: number;
    ELEMENT_SET_NO: number;
    REV_AT_EPOCH: number;
    BSTAR: number;
    MEAN_MOTION_DOT: number;
    MEAN_MOTION_DDOT: number;
    SEMIMAJOR_AXIS: number;
    PERIOD: number;
    APOAPSIS: number;
    PERIAPSIS: number;
    OBJECT_TYPE: string | null;
    RCS_SIZE: string | null;
    COUNTRY_CODE: string | null;
    LAUNCH_DATE: string | null;
    SITE: string | null;
    DECAY_DATE: string | null;
    DECAYED: number;
    FILE: number;
    GP_ID: number;
    TLE_LINE0: string | null;
    TLE_LINE1: string | null;
    TLE_LINE2: string | null;
  };
}

export interface IRocketType {
  active: boolean;
  boosters: number;
  company: string;
  cost_per_launch: number;
  country: string;
  description: string;
  diameter: IdiameterType;
  engines: IenginesType;
  first_flight: string;
  first_stage: Ifirst_stage;
  flickr_images: Iflickr_imagesType;
  height: IdiameterType;
  id: string;
  landing_legs: landing_legsType;
  mass: Imass;
  name: string;
  payload_weights: Ipayloads;
  second_stage: Isecond_stage;
  stages: number;
  success_rate_pct: number;
  type: string;
  wikipedia: string;
}

interface IdiameterType {
  meters: number;
  feet: number;
}
interface IenginesType {
  number: number;
  type: string;
  version: string;
  layout: string;
  isp: {
    sea_level: number;
    vacuum: number;
  };
  engine_loss_max: number;
  propellant_1: string;
  propellant_2: string;
  thrust_sea_level: {
    kN: number;
    lbf: number;
  };
  thrust_vacuum: {
    kN: number;
    lbf: number;
  };
  thrust_to_weight: number;
}

interface landing_legsType {
  number: number;
  material: {
    type: Object;
  };
}

interface Iflickr_imagesType {
  type: [String];
}

interface Ifirst_stage {
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
  thrust_sea_level: {
    kN: number;
    lbf: number;
  };
  thrust_vacuum: {
    kN: number;
    lbf: number;
  };
}

interface Imass {
  kg: number;
  lb: number;
}

interface Ipayloads {
  option_1: {
    type: String;
  };
  composite_fairing: {
    height: {
      meters: number;
      feet: number;
    };
    diameter: {
      meters: number;
      feet: number;
    };
  };
}
interface Isecond_stage {
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
  thrust: {
    kN: number;
    lbf: number;
  };
}
