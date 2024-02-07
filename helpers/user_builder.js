import { faker } from '@faker-js/faker'

const BuildUser = function () {
    this.addEmail = function () {
        this.mail = faker.internet.email();
        return this;
    };
    this.addFirstName = function () {
        this.firstname = faker.name.firstName();
        return this;
    };
    this.addLastName = function () {
        this.lastname = faker.name.lastName();
        return this;
    };
    this.addPassword = function () {
        this.password = faker.internet.password();
        return this;
    };
    this.addPhoneNumber = function () {
        this.phoneNumber = faker.string.numeric(10);
        return this;
    };
    // this.addBirthDate = function () {
    //     this.birthNumber = faker.date.between({ from: '10 Feb 1990', to: '10 Feb 1995' });
    //     return this;
    // };
    this.addBirthDate = function () {
        const startDate = new Date('1990-02-10');
        const endDate = new Date('1995-02-10');
        this.birthNumber = faker.date.between(startDate, endDate);
        const formattedDate = `${this.birthNumber.getFullYear()}-${(this.birthNumber.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${this.birthNumber.getDate().toString().padStart(2, '0')}`;
        this.birthNumber = formattedDate;
        return this;
    };

    this.generate = function () {
        const fields = Object.getOwnPropertyNames(this);
        const data = {};

        fields.forEach((fieldName) => {
            if (this[fieldName] && typeof this[fieldName] !== 'function') {
                data[fieldName] = this[fieldName];
            }
        }
        );
    return data;
    };
};

export default BuildUser;