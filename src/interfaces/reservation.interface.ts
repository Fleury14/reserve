interface IReservation {
    id?: string;
    email: string;
    reason: string;
    startTime: Date;
    endTime: Date;
    emailConfirmation: string;
    isAgreed: string;
    [propName: string]: any;

    // the propname line allows any property to be added in addition to the ones already required. we'll be using
    // this for an animation flag.
}

export default IReservation;
