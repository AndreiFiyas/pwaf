import { faker } from '@faker-js/faker'

class BuildUser {
    private mail?: string;
    private firstname?: string;
    private lastname?: string;
    private password?: string;
    // private birthNumber?: string;

    public addEmail(): this {
        this.mail = faker.internet.email();
        return this;
    }

    public addFirstName(): this {
        this.firstname = faker.name.firstName();
        return this;
    }

    public addLastName(): this {
        this.lastname = faker.name.lastName();
        return this;
    }

    public addPassword(): this {
        this.password = faker.internet.password();
        return this;
    }

    // public addBirthDate(): this {
    //     const startDate = new Date('1990-02-10');
    //     const endDate = new Date('1995-02-10');
    //     this.birthNumber = faker.date.between(startDate, endDate).toISOString().split('T')[0];
    //     return this;
    // }

    public generate(): Record<string, string> {
        const data: Record<string, string> = {};
        const fields = Object.getOwnPropertyNames(this);

        fields.forEach((fieldName) => {
            if (this[fieldName] !== undefined && typeof this[fieldName] !== 'function') {
                data[fieldName] = this[fieldName]!;
            }
        });

        return data;
    }
}

// Пример использования класса
// const userData = new UserDataGenerator()
//     .addEmail()
//     .addFirstName()
//     .addLastName()
//     .addPassword()
//     .addPhoneNumber()
//     .addBirthDate()
//     .generate();
//
// console.log(userData);
export default class BuildUser {
}