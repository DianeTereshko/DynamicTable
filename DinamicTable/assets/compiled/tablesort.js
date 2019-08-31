"use strict";
var Row = /** @class */ (function () {
    function Row(id, name, type, isvisible) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.isvisble = isvisible;
    }
    return Row;
}());
var head = ["Id", "Тип", "Видимость", "Активный"];
var data1 = new Row(1, "Shannon Breitenberg", "Direct Tactics Producer", true);
var data2 = new Row(2, "Haley Schiller", "Central Applications Supervisor", true);
var data3 = new Row(3, "Sabrina Block II", "Legacy Functionality Officer", true);
var data4 = new Row(4, "Maybell Volkman", "Product Web Facilitator", false);
var data5 = new Row(5, "Zackery Paucek", "Regional Usability Liaison", true);
var data6 = new Row(6, "Dr. Krystal Wilkinson", "Principal Tactics Planner", false);
var data7 = new Row(7, "Chanelle McKenzie", "District Solutions Supervisor", true);
var data8 = new Row(8, "Billy Kunze II", "Lead Quality Producer", true);
var data9 = new Row(9, "Eliezer Bailey", "Regional Accountability Executive", false);
var data10 = new Row(10, "Rickie Fay", "Corporate Configuration Orchestrator", true);
var data11 = new Row(11, "Kaycee Kub", "Chief Functionality Liaison", true);
var data12 = new Row(12, "Destinee Mueller PhD", "Dynamic Identity Facilitator", false);
var data13 = new Row(13, "Adeline Bins Sr.", "Regional Usability Associate", true);
var data14 = new Row(14, "Myrtie Kunze", "Dynamic Intranet Supervisor", false);
var data15 = new Row(15, "David Luettgen", "International Division Executive", true);
var data16 = new Row(16, "Ismael Nolan", "International Metrics Assistant", false);
var data17 = new Row(17, "Maegan Fay", "Principal Group Director", true);
var data18 = new Row(18, "Zander Adams", "Principal Division Assistant", true);
var data19 = new Row(19, "Onie Krajcik", "Chief Marketing Liaison", true);
var data20 = new Row(20, "Helmer Huels", "Lead Interactions Analyst", true);
var data21 = new Row(21, "Rhiannon Walker", "District Integration Developer", false);
var data22 = new Row(22, "Dianna Nolan", "Lead Quality Producer", true);
var data23 = new Row(23, "Garfield Upton", "National Quality Liaison", false);
var data24 = new Row(24, "Xavier Stamm", "Customer Configuration Administrator", true);
var data25 = new Row(25, "Gino Heller", "Product Tactics Supervisor", true);
var data26 = new Row(26, "Beulah Mitchell", "Investor Tactics Administrator", false);
var data27 = new Row(27, "Destany Johnston", "Forward Identity Director", true);
var data28 = new Row(28, "Kamron VonRueden", "Central Solutions Assistant", true);
var data29 = new Row(29, "Jaylen Nitzsche PhD", "Corporate Usability Administrator", false);
var data30 = new Row(30, "Turner Lemke", "Regional Data Developer", true);
var data31 = new Row(31, "Chris Schaefer", "Customer Security Officer", false);
var data32 = new Row(32, "Dillon Upton", "Regional Factors Associate", true);
var data33 = new Row(33, "Austen Marks", "Chief Response Consultant", false);
var data34 = new Row(34, "Kenton Cartwright", "Customer Intranet Architect", true);
var data = [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14, data15, data16, data17, data18, data19, data20, data21, data22, data23, data24, data25, data26, data27, data28, data29, data30, data31, data32, data33, data34];
DrowTable(head, data);
function DrowTable(head, data) {
    var theader = "<thead scope=\"col\"><tr class=\"w3-red\"><th><p>" + head[1] + "<i id=\"head-name\" class=\"head-name w3-ext-cursor material-icons w3-ext-sort-icon\">unfold_more</i></p></th><th><p>" + head[2] + "</p></th><th>" + head[3] + "</th><th>Action</th></tr></thead>";
    var tbody = "<tbody></tbody>";
    $("table").append(theader);
    $("table").append(tbody);
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var row = data_1[_i];
        var newrow = "<tr><td><p contenteditable>" + row.name + "</p></td><td><p contenteditable>" + row.type + "</p></td><td><select><option value=\"" + row.isvisble + "\">" + row.isvisble + "</option><option id=isvisible value=\"" + !row.isvisble + "\">" + !row.isvisble + "</option></select></td><td><a href=\"#\" onclick=\"SendToASPCore()\" class=\"w3-ext-button-animate w3-button w3-small\">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</a></td></tr>";
        // Если нужны уникальные id для того чтобы получить новые значения ячеек то включить эту строку (id будут уникальные но сортировка работать не будет))
        // let newrow = `<tr><td><p id="${row.id}name" contenteditable>${row.name}</p></td><td><p id="${row.id}type" contenteditable>${row.type}</p></td><td><select><option value="${row.isvisble}">${row.isvisble}</option><option id=isvisible value="${!row.isvisble}">${!row.isvisble}</option></select></td><td><a href="#" onclick="SendToASPCore(${row.id})" class="w3-ext-button-animate w3-button w3-small">Сохранить</a></td></tr>`;
        $("table").prepend(newrow);
    }
    $('table.w3-ext-paginated').each(function () {
        var currentPage = 0;
        var numPerPage = 10;
        var $table = $(this);
        $table.bind('repaginate', function () {
            $table.find('tbody tr').hide().slice(currentPage * numPerPage, (currentPage + 1) * numPerPage).show();
        });
        $table.trigger('repaginate');
        var numRows = $table.find('tbody tr').length;
        var numPages = Math.ceil(numRows / numPerPage);
        var $pager = $('<div class="w3-bar w3-center"></div>');
        for (var page = 0; page < numPages; page++) {
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
    if ($(this).hasClass("switch")) {
        $("#head-name").empty();
        $("#head-name").text("keyboard_arrow_up");
        sort();
        // console.log($(this).hasClass("switch"));
    }
    if (!$(this).hasClass("switch")) {
        $("#head-name").empty();
        $("#head-name").text("keyboard_arrow_down");
        sortbydesc();
        // console.log($(this).hasClass("switch"));   
    }
    $(this).toggleClass("switch");
});
function sort() {
    var thIndex = 0;
    var curThIndex = null;
    var sorting;
    var tbodyHtml;
    var rowId;
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
    var thIndex = 0;
    var curThIndex = null;
    var sorting;
    var tbodyHtml;
    var rowId;
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
function SendToASPCore(currentrowid) {
    console.log("id \u0437\u0430\u043F\u0438\u0441\u0438:" + currentrowid);
    console.log("Новое название:");
    console.log($("#" + currentrowid + "name").text());
    console.log("Новый тип:");
    console.log($("#" + currentrowid + "type").text());
    console.log("Данные отправлены в ASP.NET Core по Ajax");
}
;
