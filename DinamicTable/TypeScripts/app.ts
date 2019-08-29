
interface IRow {
    name: string;
    type: string;
    isvisble: boolean;
}

class Row implements IRow {
    public name: string;
    public type: string;
    public isvisble: boolean;
    constructor(name: string, type: string, isvisible: boolean) {
        this.name = name;
        this.type = type;
        this.isvisble = isvisible;
    }
}

let head: Array<string> = ["Имя", "Тип", "Видимость"];
let data1: IRow = new Row("Shannon Breitenberg", "Direct Tactics Producer", true);
let data2: IRow = new Row("Haley Schiller", "Central Applications Supervisor", true);
let data3: IRow = new Row("Sabrina Block II", "Legacy Functionality Officer", true);
let data4: IRow = new Row("Maybell Volkman", "Product Web Facilitator", false);
let data5: IRow = new Row("Zackery Paucek", "Regional Usability Liaison", true);
let data6: IRow = new Row("Dr. Krystal Wilkinson", "Principal Tactics Planner", false);
let data7: IRow = new Row("Chanelle McKenzie", "District Solutions Supervisor", true);
let data8: IRow = new Row("Billy Kunze II", "Lead Quality Producer", true);
let data9: IRow = new Row("Eliezer Bailey", "Regional Accountability Executive", false);
let data10: IRow = new Row("Rickie Fay", "Corporate Configuration Orchestrator", true);
let data11: IRow = new Row("Kaycee Kub", "Chief Functionality Liaison", true);
let data12: IRow = new Row("Destinee Mueller PhD", "Dynamic Identity Facilitator", false);
let data13: IRow = new Row("Adeline Bins Sr.", "Regional Usability Associate", true);
let data14: IRow = new Row("Myrtie Kunze", "Dynamic Intranet Supervisor", false);
let data15: IRow = new Row("David Luettgen", "International Division Executive", true);
let data16: IRow = new Row("Ismael Nolan", "International Metrics Assistant", false);
let data17: IRow = new Row("Maegan Fay", "Principal Group Director", true);
let data18: IRow = new Row("Zander Adams", "Principal Division Assistant", true);
let data19: IRow = new Row("Onie Krajcik", "Chief Marketing Liaison", true);
let data20: IRow = new Row("Helmer Huels", "Lead Interactions Analyst", true);
let data21: IRow = new Row("Rhiannon Walker", "District Integration Developer", false);
let data22: IRow = new Row("Dianna Nolan", "Lead Quality Producer", true);
let data23: IRow = new Row("Garfield Upton", "National Quality Liaison", false);
let data24: IRow = new Row("Xavier Stamm", "Customer Configuration Administrator", true);
let data25: IRow = new Row("Gino Heller", "Product Tactics Supervisor", true);
let data26: IRow = new Row("Beulah Mitchell", "Investor Tactics Administrator", false);
let data27: IRow = new Row("Destany Johnston", "Forward Identity Director", true);
let data28: IRow = new Row("Kamron VonRueden", "Central Solutions Assistant", true);
let data29: IRow = new Row("Jaylen Nitzsche PhD", "Corporate Usability Administrator", false);
let data30: IRow = new Row("Turner Lemke", "Regional Data Developer", true);
let data31: IRow = new Row("Chris Schaefer", "Customer Security Officer", false);
let data32: IRow = new Row("Dillon Upton", "Regional Factors Associate", true);
let data33: IRow = new Row("Austen Marks", "Chief Response Consultant", false);
let data34: IRow = new Row("Kenton Cartwright", "Customer Intranet Architect", true);
let data: Array<IRow> = [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14, data15, data16, data17, data18, data19, data20, data21, data22, data23, data24, data25, data26, data27, data28, data29, data30, data31, data32, data33, data34]

DrowTable(head, data);


function DrowTable(head: Array<String>, data: Array<IRow>) {

    let theader = `<thead scope="col"><tr class="w3-red"><th class="w3-ext-cursor"><p>${head[0]}<i class="material-icons w3-ext-sort-icon">unfold_more</i></p></th><th class="w3-ext-cursor"><p>${head[1]}<i class="material-icons w3-ext-sort-icon">unfold_more</i></p></th><th>${head[2]}</th><th>Действия</th></tr></thead>`;
    let tbody = `<tbody></tbody>`;
    $("table").append(theader);
    $("table").append(tbody);
    for (let row of data) {
        let newrow = `<tr><td><p contenteditable id="name">${row.name}</p></td><td><p id="type" contenteditable>${row.type}</p></td><td><select><option value="${row.isvisble}">${row.isvisble}</option><option id=isvisible value="${!row.isvisble}">${!row.isvisble}</option></select></td><td><a href="#" onclick="SendToMVC(event)" class="w3-ext-button-animate w3-button w3-small">Сохранить</a></td></tr>`;
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

    let thIndex = 0;
    let curThIndex: any = null;
    let sorting: any;
    let tbodyHtml: any;
    let rowId: any;
    $(function () {
        $('table thead tr .w3-ext-cursor').click(function () {
            thIndex = $(this).index();
            if (thIndex != curThIndex) {
                curThIndex = thIndex;
                sorting = [];
                tbodyHtml = null;
                $('table tbody tr').each(function () {
                    sorting.push($(this).children('td').eq(curThIndex).html() + ', ' + $(this).index());
                });

                sorting = sorting.sort();
                sortIt();
            }
        });
    })
    function sortIt() {
        for (var sortingIndex = 0; sortingIndex < sorting.length; sortingIndex++) {
            rowId = parseInt(sorting[sortingIndex].split(', ')[1]);
            tbodyHtml = tbodyHtml + $('table tbody tr').eq(rowId)[0].outerHTML;
        }
        $('table tbody').html(tbodyHtml);
    }
}

function SendToMVC(event:any){
    console.log(event);
    let newname:string = $("#name").text();
    let newtype:string = $("#type").text();
    let newisvisible = $("#isvisible").text();
    console.log(`Новое название: ${newname}, Новый тип: ${newtype}, Новая видимость: ${newisvisible}`);
    console.log("Данные отправлены на сервер по Ajax");
}