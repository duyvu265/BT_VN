class Employee {
    private _名前: string;
    private _年: number;
    private _セックス: string;
    private _アドレス: string;


    constructor( 名前: string, 年: number, セックス: string, アドレス: string) {
        this._名前 =  名前;
        this._年 = 年;
        this._セックス = セックス;
        this._アドレス = アドレス;
    }

    get  名前(): string {
        return this._名前;
    }

    set  名前(value: string) {
        this._名前 = value;
    }

    get 年(): number {
        return this._年;
    }

    set 年(value: number) {
        this._年 = value;
    }

    get セックス(): string {
        return this._セックス;
    }

    set セックス(value: string) {
        this._セックス = value;
    }

    get アドレス(): string {
        return this._アドレス;
    }

    set アドレス(value: string) {
        this._アドレス = value;
    }
}

class サラリーマン extends Employee {
    private _lever: number;


    constructor( 名前: string, 年: number, セックス: string, アドレス: string, lever: number) {
        super( 名前, 年, セックス, アドレス);
        this._lever = lever;
    }

    get lever(): number {
        return this._lever;
    }

    set lever(value: number) {
        if (value < 0 || value > 10) {
            console.log("これはサラリーマンのleverではない")
        } else {
            this._lever = value;

        }
    }
}

class エンジニア extends Employee {
    private _専門: string;

    constructor( 名前: string, 年: number, セックス: string, アドレス: string, 専門: string) {
        super( 名前, 年, セックス, アドレス);
        this._専門 = 専門;
    }

    get 専門(): string {
        return this._専門;
    }

    set 専門(value: string) {
        this._専門 = value;
    }
}

class 社員 extends Employee {
    private _仕事: string;

    constructor( 名前: string, 年: number, セックス: string, アドレス: string, 仕事: string) {
        super( 名前, 年, セックス, アドレス);
        this._仕事 = 仕事;
    }

    get 仕事(): string {
        return this._仕事;
    }

    set 仕事(value: string) {
        this._仕事 = value;
    }
}


// employee.push(new Employee("nam", 19, "男", "HANOI"));
// employee.push(new Employee("thanh", 19, "女", "HANOI"));
// employee.push(new Employee("hieu", 19, "男", "HANOI"));
// console.log(employee)

class 社員管理 {
    employee: Employee[] = [];

    add管理(a: Employee) {
        this.employee.push(a);
    }

    find( 名前: string): any {
        this.employee.forEach((function (value, index, array) {
            if ( 名前 === value. 名前) {
                console.table(array[index])
            }

        }))
    }

    Show(): any {
        console.table(this.employee)
    }

}



// let employee = new サラリーマン("hieu", 19, "男", "HANOI", 9);
// let employee1 = new エンジニア("ha", 20, "男", "HAIPHONG", "a1");
// let employee2 = new 社員("hieu", 21, "男", "HAIPHONG", "スタッフ");
// let ql = new 社員管理();
// ql.add管理(employee);
// ql.add管理(employee1);
// ql.add管理(employee2)
// ql.find("hieu")
// ql.show();

let 入力 = require('readline-sync');
let 新社員管理 = new 社員管理();
class QL_employee{
    employee:Employee[]=[];

    サラリーマン:サラリーマン[]=[];
    エンジニア:エンジニア[]=[];
    社員:社員[]=[];
    constructor() {
    }


}

function showMenu() {
    let 選び = -1;
    do {
        console.log(
            `----MENU----
             1.プラス(up)
             ２. ディスプレイ(display)
             3.find(find)
             0.戻り(out)
             `
        )
        選び = +入力.question('選びを入力(選び)');
        switch (選び) {
            case 1:
                add();
                break;
            case 2:
                showall();
                break;
            case 3:  findall();
                break
        }
    }
    while (選び !== 0);

}
function findall(){
    console.log(新社員管理.find)
    
}

function add() {
    let 選び = -1;
    do {
        console.log(`
        ----MENU----
        1.addCN
        2.addKS
        3.addNV
        0.OUT`)
        選び = +入力.question('選びを入力(選び)');
        switch (選び) {
            case 1:
                add管理()
                break;
            case 2:
                addエンジニア();
                break;
            case 3:
               add社員();
                break

        }
    } while (選び != 0)

    function add管理() {
        console.log(`----MENU----`);
        let  名前 = 入力.question(' 名前を記入してください(nhap ten)');
        let 年 = +入力.question('お年を記入してください(nhap tuoi)');
        let セックス = 入力.question('セックスを記入してください(nhap gioi tinh)');
        let アドレス = 入力.question('アドレスを記入してください(nhap dia chi)');
        let lever = 入力.question('leverを記入してください(nhap lever)');
        let person: サラリーマン = new サラリーマン( 名前, 年, セックス, アドレス, lever);
        新社員管理.add管理(person);
        console.log("OK");
    }

    function addエンジニア() {
        console.log(`----MENU----`);
        let  名前 = 入力.question(' 名前を記入してください(nhap teb)');
        let 年 = +入力.question('お年を記入してください(nhap tuoi)');
        let セックス = 入力.question('セックスを記入してください(gioi tinh)');
        let アドレス = 入力.question('アドレスを記入してください(dia chi)');
        let 専門 = 入力.question('専門を記入してください(chuyen nganh)');
        let エンジニア1: エンジニア = new エンジニア( 名前, 年, セックス, アドレス, 専門);
        新社員管理.add管理(エンジニア1);
        console.log("OK");
    }

    function add社員() {
        console.log(`----MENU----`);
        let  名前 = 入力.question(' 名前を記入してください(nhap ten)');
        let 年 = +入力.question('お年を記入してください(nhap tuoi)');
        let セックス = 入力.question('セックスを記入してください(nhap gioi tinh)');
        let アドレス = 入力.question('アドレスを記入してください(nhap dia chi)');
        let 仕事 = 入力.question('仕事を記入してください(nhap cong viec)');
        let 社員1: 社員 = new 社員( 名前, 年, セックス, アドレス, 仕事);
        新社員管理.add管理(社員1);
        console.log("OK");
    }
}

function showall() {
    let 選び1 = -1;
    do {
        console.log(`
        ----MENU----
        1.showCN
        2.showKS
        3.showNV
        0.OUT`)
        選び1 = +入力.question('選びを入力(選び)');
        switch (選び1) {
            case 1:show1();
                break;
            case 2:show2();

                break;
            case 3:show3();


                break

        }
    } while (選び1 != 0)
    function show1(){
        console.table(サラリーマン);
    } function show2(){
        console.table(エンジニア);
    } function show3(){
        console.table(社員);

    }
}


showMenu()





