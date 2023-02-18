class Employee {
    private _名前: string;
    private _歳: number;
    private _セックス: string;
    private _アドレス: string;


    constructor(名前: string, 歳: number, セックス: string, アドレス: string) {
        this._名前 = 名前;
        this._歳 = 歳;
        this._セックス = セックス;
        this._アドレス = アドレス;
    }

    get 名前(): string {
        return this._名前;
    }

    set 名前(value: string) {
        this._名前 = value;
    }

    get 歳(): number {
        return this._歳;
    }

    set 歳(value: number) {
        this._歳 = value;
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
    private _レベル: number;


    constructor(名前: string, 歳: number, セックス: string, アドレス: string, レベル: number) {
        super(名前, 歳, セックス, アドレス);
        this._レベル = レベル;
    }

    get レベル(): number {
        return this._レベル;
    }

    set レベル(value: number) {
        if (value < 0 || value > 10) {
            console.log("これはサラリーマンのレベルではない")
        } else {
            this._レベル = value;

        }
    }
}

class エンジニア extends Employee {
    private _専門: string;

    constructor(名前: string, 歳: number, セックス: string, アドレス: string, 専門: string) {
        super(名前, 歳, セックス, アドレス);
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

    constructor(名前: string, 歳: number, セックス: string, アドレス: string, 仕事: string) {
        super(名前, 歳, セックス, アドレス);
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

    調べ(名前: string): any {
        this.employee.forEach((function (value, index, array) {
            if (名前 === value.名前) {
                console.table(array[index])
            }

        }))
    }

    現れ(): any {
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
// ql.調べ("hieu")
// ql.現れ();

let 入力 = require('readline-sync');
let 新社員管理 = new 社員管理();

function showMenu() {
    let 選び = -1;
    do {
        console.log(
            `----MENU----
             1.プラス
             ２. ディスプレイ
             3.調べ
             0.戻り
             `
        )
        選び = +入力.question('選びを入力');
        switch (選び) {
            case 1:
                add管理();
                break;
            case 2:
                現れ();
                break;
            case 3:
                break
        }
    }
    while (選び !== 0);


}

function add管理() {
    console.log(`----MENU----`);
    let 名前 = 入力.question('名前を記入してください');
    let 歳 = +入力.question('お年を記入してください');
    let セックス = 入力.question('セックスを記入してください');
    let アドレス = 入力.question('アドレスを記入してください');
    let レベル = 入力.question('レベルを記入してください');
    let person: サラリーマン = new サラリーマン(名前, 歳, セックス, アドレス, レベル);
    新社員管理.add管理(person);
    console.log("OK");
}

function 現れ() {
    console.table(新社員管理.現れ());
}

showMenu()






