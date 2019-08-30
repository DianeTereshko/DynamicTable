"use strict";
var Row = /** @class */ (function () {
    function Row(name, type, isvisible) {
        this.name = name;
        this.type = type;
        this.isvisble = isvisible;
    }
    return Row;
}());
var head = ["Имя", "Тип", "Видимость"];
var data1 = new Row("Shannon Breitenberg", "Direct Tactics Producer", true);
var data2 = new Row("Haley Schiller", "Central Applications Supervisor", true);
var data3 = new Row("Sabrina Block II", "Legacy Functionality Officer", true);
var data4 = new Row("Maybell Volkman", "Product Web Facilitator", false);
var data5 = new Row("Zackery Paucek", "Regional Usability Liaison", true);
var data6 = new Row("Dr. Krystal Wilkinson", "Principal Tactics Planner", false);
var data7 = new Row("Chanelle McKenzie", "District Solutions Supervisor", true);
var data8 = new Row("Billy Kunze II", "Lead Quality Producer", true);
var data9 = new Row("Eliezer Bailey", "Regional Accountability Executive", false);
var data10 = new Row("Rickie Fay", "Corporate Configuration Orchestrator", true);
var data11 = new Row("Kaycee Kub", "Chief Functionality Liaison", true);
var data12 = new Row("Destinee Mueller PhD", "Dynamic Identity Facilitator", false);
var data13 = new Row("Adeline Bins Sr.", "Regional Usability Associate", true);
var data14 = new Row("Myrtie Kunze", "Dynamic Intranet Supervisor", false);
var data15 = new Row("David Luettgen", "International Division Executive", true);
var data16 = new Row("Ismael Nolan", "International Metrics Assistant", false);
var data17 = new Row("Maegan Fay", "Principal Group Director", true);
var data18 = new Row("Zander Adams", "Principal Division Assistant", true);
var data19 = new Row("Onie Krajcik", "Chief Marketing Liaison", true);
var data20 = new Row("Helmer Huels", "Lead Interactions Analyst", true);
var data21 = new Row("Rhiannon Walker", "District Integration Developer", false);
var data22 = new Row("Dianna Nolan", "Lead Quality Producer", true);
var data23 = new Row("Garfield Upton", "National Quality Liaison", false);
var data24 = new Row("Xavier Stamm", "Customer Configuration Administrator", true);
var data25 = new Row("Gino Heller", "Product Tactics Supervisor", true);
var data26 = new Row("Beulah Mitchell", "Investor Tactics Administrator", false);
var data27 = new Row("Destany Johnston", "Forward Identity Director", true);
var data28 = new Row("Kamron VonRueden", "Central Solutions Assistant", true);
var data29 = new Row("Jaylen Nitzsche PhD", "Corporate Usability Administrator", false);
var data30 = new Row("Turner Lemke", "Regional Data Developer", true);
var data31 = new Row("Chris Schaefer", "Customer Security Officer", false);
var data32 = new Row("Dillon Upton", "Regional Factors Associate", true);
var data33 = new Row("Austen Marks", "Chief Response Consultant", false);
var data34 = new Row("Kenton Cartwright", "Customer Intranet Architect", true);
var data = [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14, data15, data16, data17, data18, data19, data20, data21, data22, data23, data24, data25, data26, data27, data28, data29, data30, data31, data32, data33, data34];
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.DrowTable = function (head, data) {
        var theader = "<thead scope=\"col\"><tr class=\"w3-red\"><th><p>" + head[0] + "<i id=\"head-name\" class=\"head-name w3-ext-cursor material-icons w3-ext-sort-icon\">unfold_more</i></p></th><th><p>" + head[1] + "<i id=\"head-type\" class=\"head-type w3-ext-cursor material-icons w3-ext-sort-icon\">unfold_more</i></p></th><th>" + head[2] + "</th><th>\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F</th></tr></thead>";
        var tbody = "<tbody></tbody>";
        $("table").append(theader);
        $("table").append(tbody);
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var row = data_1[_i];
            var newrow = "<tr><td><p contenteditable id=\"name\">" + row.name + "</p></td><td><p id=\"type\" contenteditable>" + row.type + "</p></td><td><select><option value=\"" + row.isvisble + "\">" + row.isvisble + "</option><option id=isvisible value=\"" + !row.isvisble + "\">" + !row.isvisble + "</option></select></td><td><a href=\"#\" onclick=\"SendToMVC(event)\" class=\"w3-ext-button-animate w3-button w3-small\">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</a></td></tr>";
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
        $(function () {
            $("thead tr th p i").click(function () {
                var $this = $(this);
                $this.toggleClass("w3-ext-sort");
                $("i").empty();
                var rowId;
                if ($this.hasClass('w3-ext-sort')) {
                    $("i").text("keyboard_arrow_up");
                    if ($this.hasClass("head-name")) {
                        $("#head-type").text("unfold_more");
                    }
                    if ($this.hasClass("head-type")) {
                        $("#head-name").text("unfold_more");
                    }
                    var thIndex = 0;
                    var curThIndex_1 = null;
                    var sorting_1;
                    var tbodyHtml = void 0;
                    var rowId_1;
                    thIndex = $(this).index();
                    if (thIndex != curThIndex_1) {
                        curThIndex_1 = thIndex;
                        sorting_1 = [];
                        tbodyHtml = null;
                        $('table tbody tr').each(function () {
                            sorting_1.push($(this).children('td').eq(curThIndex_1).html() + ', ' + $(this).index());
                        });
                        sorting_1 = sorting_1.sort();
                        for (var sortingIndex = 0; sortingIndex < sorting_1.length; sortingIndex++) {
                            rowId_1 = parseInt(sorting_1[sortingIndex].split(', ')[1]);
                            tbodyHtml = tbodyHtml + $('table tbody tr').eq(rowId_1)[0].outerHTML;
                        }
                        $('table tbody').html(tbodyHtml);
                    }
                }
                if (!$this.hasClass('w3-ext-sort')) {
                    $("i").text("keyboard_arrow_down");
                    if ($this.hasClass("head-name")) {
                        $("#head-type").text("unfold_more");
                    }
                    if ($this.hasClass("head-type")) {
                        $("#head-name").text("unfold_more");
                    }
                    var thIndex = 0;
                    var curThIndex_2 = null;
                    var sorting_2;
                    var tbodyHtml = void 0;
                    thIndex = $(this).index();
                    if (thIndex != curThIndex_2) {
                        curThIndex_2 = thIndex;
                        sorting_2 = [];
                        tbodyHtml = null;
                        $('table tbody tr').each(function () {
                            sorting_2.push($(this).children('td').eq(curThIndex_2).html() + ', ' + $(this).index());
                        });
                        sorting_2 = sorting_2.sort();
                        sorting_2 = sorting_2.reverse();
                        for (var sortingIndex = 0; sortingIndex < sorting_2.length; sortingIndex++) {
                            rowId = parseInt(sorting_2[sortingIndex].split(', ')[1]);
                            tbodyHtml = tbodyHtml + $('table tbody tr').eq(rowId)[0].outerHTML;
                        }
                        $('table tbody').html(tbodyHtml);
                    }
                }
            });
        });
    };
    ;
    return Service;
}());
var service = new Service();
service.DrowTable(head, data);
function SendToMVC(event) {
    console.log(event);
    var newname = $("#name").text();
    var newtype = $("#type").text();
    var newisvisible = $("#isvisible").text();
    console.log("\u041D\u043E\u0432\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: " + newname + ", \u041D\u043E\u0432\u044B\u0439 \u0442\u0438\u043F: " + newtype + ", \u041D\u043E\u0432\u0430\u044F \u0432\u0438\u0434\u0438\u043C\u043E\u0441\u0442\u044C: " + newisvisible);
    console.log("Данные отправлены на сервер по Ajax");
}
;
