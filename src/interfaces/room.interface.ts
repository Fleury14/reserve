import IReservation from './reservation.interface';

interface IRoom {
    id: string;
    name: string;
    picture: string;
    reservations?: IReservation[];
}

export default IRoom;
