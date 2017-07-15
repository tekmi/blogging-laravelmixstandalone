class CompanyNameGenerator {
    constructor(companyName) {
        this.companyName = companyName;
    }

    print() {
        console.log(`Your generated company name is ${this.companyName}`);
    }
}

window.tekmi = new CompanyNameGenerator('Tekmi');
