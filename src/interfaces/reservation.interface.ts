interface IReservation {
    id?: string;
    email: string;
    reason: string;
    startTime: Date;
    endTime: Date;
    emailConfirmation: string;
    isAgreed: string;
}

export default IReservation;
