// stores/userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        firstName: '',
        lastName: '',
        email: '',
        ticketNumber: '',
        userId: null,
    }),
    actions: {
        setUserData(payload) {
            this.firstName = payload.firstName;
            localStorage.setItem('firstName', this.firstName);

            this.lastName = payload.lastName;
            localStorage.setItem('lastName', this.lastName);

            this.email = payload.email;
            localStorage.setItem('email', this.email);

            this.ticketNumber = payload.ticketNumber;
            localStorage.setItem('ticketNumber', this.ticketNumber);

            this.userId = +payload.id;
            localStorage.setItem('userId', this.userId);
        },
    },
});
