
interface IRow {
    id: number;
    name: string;
    type: string;
    isvisble: boolean;
}

class Row implements IRow {
    public id: number;
    public name: string;
    public type: string;
    public isvisble: boolean;
    constructor(id: number, name: string, type: string, isvisible: boolean) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.isvisble = isvisible;
    }
}

interface IService {
    DrowTable(head: Array<String>, data: Array<IRow>): void;
}

let head: Array<any> = ["Id", "Тип", "Видимость", "Активный"];
let data1: IRow = new Row(1, "Shannon Breitenberg", "Direct Tactics Producer", true);
let data2: IRow = new Row(2, "Haley Schiller", "Central Applications Supervisor", true);
let data3: IRow = new Row(3, "Sabrina Block II", "Legacy Functionality Officer", true);
let data4: IRow = new Row(4, "Maybell Volkman", "Product Web Facilitator", false);
let data5: IRow = new Row(5, "Zackery Paucek", "Regional Usability Liaison", true);
let data6: IRow = new Row(6, "Dr. Krystal Wilkinson", "Principal Tactics Planner", false);
let data7: IRow = new Row(7, "Chanelle McKenzie", "District Solutions Supervisor", true);
let data8: IRow = new Row(8, "Billy Kunze II", "Lead Quality Producer", true);
let data9: IRow = new Row(9, "Eliezer Bailey", "Regional Accountability Executive", false);
let data10: IRow = new Row(10, "Rickie Fay", "Corporate Configuration Orchestrator", true);
let data11: IRow = new Row(11, "Kaycee Kub", "Chief Functionality Liaison", true);
let data12: IRow = new Row(12, "Destinee Mueller PhD", "Dynamic Identity Facilitator", false);
let data13: IRow = new Row(13, "Adeline Bins Sr.", "Regional Usability Associate", true);
let data14: IRow = new Row(14, "Myrtie Kunze", "Dynamic Intranet Supervisor", false);
let data15: IRow = new Row(15, "David Luettgen", "International Division Executive", true);
let data16: IRow = new Row(16, "Ismael Nolan", "International Metrics Assistant", false);
let data17: IRow = new Row(17, "Maegan Fay", "Principal Group Director", true);
let data18: IRow = new Row(18, "Zander Adams", "Principal Division Assistant", true);
let data19: IRow = new Row(19, "Onie Krajcik", "Chief Marketing Liaison", true);
let data20: IRow = new Row(20, "Helmer Huels", "Lead Interactions Analyst", true);
let data21: IRow = new Row(21, "Rhiannon Walker", "District Integration Developer", false);
let data22: IRow = new Row(22, "Dianna Nolan", "Lead Quality Producer", true);
let data23: IRow = new Row(23, "Garfield Upton", "National Quality Liaison", false);
let data24: IRow = new Row(24, "Xavier Stamm", "Customer Configuration Administrator", true);
let data25: IRow = new Row(25, "Gino Heller", "Product Tactics Supervisor", true);
let data26: IRow = new Row(26, "Beulah Mitchell", "Investor Tactics Administrator", false);
let data27: IRow = new Row(27, "Destany Johnston", "Forward Identity Director", true);
let data28: IRow = new Row(28, "Kamron VonRueden", "Central Solutions Assistant", true);
let data29: IRow = new Row(29, "Jaylen Nitzsche PhD", "Corporate Usability Administrator", false);
let data30: IRow = new Row(30, "Turner Lemke", "Regional Data Developer", true);
let data31: IRow = new Row(31, "Chris Schaefer", "Customer Security Officer", false);
let data32: IRow = new Row(32, "Dillon Upton", "Regional Factors Associate", true);
let data33: IRow = new Row(33, "Austen Marks", "Chief Response Consultant", false);
let data34: IRow = new Row(34, "Kenton Cartwright", "Customer Intranet Architect", true);
let data: Array<IRow> = [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14, data15, data16, data17, data18, data19, data20, data21, data22, data23, data24, data25, data26, data27, data28, data29, data30, data31, data32, data33, data34]

DrowTable(head, data);


function DrowTable(head: Array<String>, data: Array<IRow>) {

    let theader = `<thead scope="col"><tr class="w3-red"><th><p>${head[1]}<i id="head-name" class="head-name w3-ext-cursor material-icons w3-ext-sort-icon">unfold_more</i></p></th><th><p>${head[2]}</p></th><th>${head[3]}</th><th>Action</th></tr></thead>`;
    let tbody = `<tbody></tbody>`;
    $("table").append(theader);
    $("table").append(tbody);
    for (let row of data) {
        let newrow = `<tr><td><p contenteditable>${row.name}</p></td><td><p contenteditable>${row.type}</p></td><td><select><option value="${row.isvisble}">${row.isvisble}</option><option id=isvisible value="${!row.isvisble}">${!row.isvisble}</option></select></td><td><a href="#" onclick="SendToASPCore(event)" class="w3-ext-button-animate w3-button w3-small">Сохранить</a></td></tr>`;
        $("table").prepend(newrow);
    }

    $('table.w3-ext-paginated').each(function () {
        let currentPage = 0;
        let numPerPage = 10;
        let $table = $(this);
        $table.bind('repaginate', function () {
            $table.find('tbody tr').hide().slice(currentPage * numPerPage, (currentPage + 1) * numPerPage).show();
        });
        $table.trigger('repaginate');
        let numRows = $table.find('tbody tr').length;
        let numPages = Math.ceil(numRows / numPerPage);
        let $pager = $('<div class="w3-bar w3-center"></div>');
        for (let page = 0; page < numPages; page++) {
            $('<a class="w3-button w3-ext-animate-paginator"></a>').text(page + 1).bind('click', {
                newPage: page
            }, function (event) {
                currentPage = event.data['newPage'];
                $table.trigger('repaginate');
                $(this).addClass('w3-red').siblings().removeClass('w3-red');
            }).appendTo($pager).addClass('clickable');
        }
        $pager.insertAfter($table).find('span.page-number:first').addClass('w3-red');
    });
}

$("thead tr th p i").click(function () {
    if ($(this).hasClass("switch"))
    {
        $("#head-name").empty();
        $("#head-name").text("keyboard_arrow_up");
        sort();
        // console.log($(this).hasClass("switch"));
    }
    if (!$(this).hasClass("switch"))
    {     
        $("#head-name").empty();
        $("#head-name").text("keyboard_arrow_down");
        sortbydesc();
        // console.log($(this).hasClass("switch"));   
    }
    $(this).toggleClass("switch");
    
});


function sort() {
    let thIndex = 0;
    let curThIndex: any = null;
    let sorting: any;
    let tbodyHtml: any;
    let rowId: any;
    thIndex = $('table thead tr th').index();
    if (thIndex != curThIndex) {
        curThIndex = thIndex;
        sorting = [];
        tbodyHtml = null;
        $('table tbody tr').each(function () {
            sorting.push($(this).children('td').eq(curThIndex).html() + ', ' + $(this).index());
        });

        sorting = sorting.sort();

    }
    for (var sortingIndex = 0; sortingIndex < sorting.length; sortingIndex++) {
        rowId = parseInt(sorting[sortingIndex].split(', ')[1]);
        tbodyHtml = tbodyHtml + $('table tbody tr').eq(rowId)[0].outerHTML;
    }
    $('table tbody').html(tbodyHtml);
}

function sortbydesc() {
    let thIndex = 0;
    let curThIndex: any = null;
    let sorting: any;
    let tbodyHtml: any;
    let rowId: any;
    thIndex = $('table thead tr th').index();
    if (thIndex != curThIndex) {
        curThIndex = thIndex;
        sorting = [];
        tbodyHtml = null;
        $('table tbody tr').each(function () {
            sorting.push($(this).children('td').eq(curThIndex).html() + ', ' + $(this).index());
        });

        sorting = sorting.sort();
        sorting = sorting.reverse();
    }
    for (var sortingIndex = 0; sortingIndex < sorting.length; sortingIndex++) {
        rowId = parseInt(sorting[sortingIndex].split(', ')[1]);
        tbodyHtml = tbodyHtml + $('table tbody tr').eq(rowId)[0].outerHTML;
    }
    $('table tbody').html(tbodyHtml);
}

function SendToASPCore(currentrowid: any): void {
    console.log(`id записи:${currentrowid}`);
    console.log("Новое название:");
    console.log($(`#${currentrowid}name`).text());
    console.log("Новый тип:")
    console.log($(`#${currentrowid}type`).text());
    console.log("Данные отправлены в ASP.NET Core по Ajax");
};