/** Describes one sample of position data for a single airplane. */
interface IAirplanePosition {
  airplane_id: string;
  latitude_deg: number;
  longitude_deg: number;
  altitude_m: number;
  heading_deg: number;
  speed_kph: number;
}