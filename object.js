const student = {
    name: 'Rifat',
    id: 453,
    age: 21,
    balance: 6700,
    isGoodStudent: true,
    friendList: ['sifat', 'sayam', 'mukta', 'mamun'],
    TrithDay: function (cost) {
        this.balance = this.balance - cost;
        return this.balance;
    },
    add: {
        city: 'dhaka',
        location: 'azimpur',
        roadNo: 1221
    }
}

const tempString = `
    name:${student.name}
    city:${student.add.city}
    balance:${student.balance}
    friend:${student.friendList[1]}
    trithBalance:${student.TrithDay(1000)}
`

console.log(tempString);

