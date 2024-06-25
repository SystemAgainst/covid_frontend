// stores/userStore.js
import { defineStore } from 'pinia';

const FIRST_NAME = 'firstName';
const LAST_NAME = 'lastName'
const EMAIL = 'email';
const TICKET_NUMBER = 'ticketNumber';
const USER_ID = 'userId';
const PASSPORT_DATA = 'passportData'
const FLIGHT_TIME = 'flightTime';
const PCR_TEST_TIME = 'pcrTestTime';

export const useUserStore = defineStore('user', {
    state: () => ({
        firstName: localStorage.getItem(FIRST_NAME) || '',
        lastName: localStorage.getItem(LAST_NAME) || '',
        email: localStorage.getItem(EMAIL) || '',
        ticketNumber: localStorage.getItem(TICKET_NUMBER) || '',
        passportData: localStorage.getItem(PASSPORT_DATA) || '',
        userId: localStorage.getItem(USER_ID) || '',
        flightTime: localStorage.getItem(FLIGHT_TIME) || '',
        pcrTestTime: localStorage.getItem(PCR_TEST_TIME) || '',
    }),
    actions: {
        setUserData(payload) {
            this.firstName = payload.firstName;
            localStorage.setItem(FIRST_NAME, this.firstName);

            this.lastName = payload.lastName;
            localStorage.setItem(LAST_NAME, this.lastName);

            this.email = payload.email;
            localStorage.setItem(EMAIL, this.email);

            this.ticketNumber = payload.ticketNumber;
            localStorage.setItem(TICKET_NUMBER, this.ticketNumber);

            this.passportData = payload.passportData;
            localStorage.setItem(PASSPORT_DATA, this.passportData);

            this.userId = +payload.id;
            localStorage.setItem(USER_ID, this.userId);

            this.flightTime = payload.flightTime;
            localStorage.setItem(FLIGHT_TIME, this.flightTime);

            this.pcrTestTime = payload.pcrTestTime;
            localStorage.setItem(PCR_TEST_TIME, this.pcrTestTime);
        },
    },
});
