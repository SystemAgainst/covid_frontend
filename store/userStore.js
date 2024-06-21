// stores/userStore.js
import { defineStore } from 'pinia';

const FIRST_NAME = 'firstName';
const LAST_NAME = 'lastName'
const EMAIL = 'email';
const TICKET_NUMBER = 'ticketNumber';
const USER_ID = 'userId';

export const useUserStore = defineStore('user', {
    state: () => ({
        firstName: localStorage.getItem(FIRST_NAME) || '',
        lastName: localStorage.getItem(LAST_NAME) || '',
        email: localStorage.getItem(EMAIL) || '',
        ticketNumber: localStorage.getItem(TICKET_NUMBER) || '',
        userId: localStorage.getItem(USER_ID) || null,
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

            this.userId = +payload.id;
            localStorage.setItem(USER_ID, this.userId);
        },
    },
});
