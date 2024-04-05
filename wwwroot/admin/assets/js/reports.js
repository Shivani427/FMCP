$(document).ready(function () {
    $("#state").change(function () {
        var changedValue = $(this).val();
        $.ajax({
            url: '../ajax/get-districts-arr',
            type: "POST",
            data: ({
                state: changedValue
            }),
            beforeSend: function (xhr) {
                xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
            },
            success: function (resp) {
                $('#district')
                    .find('option')
                    .remove();
                var mySelect = $('#district');
                mySelect.append(resp);
            }
        });
    });

    $("#district").change(function () {
        var changedValue = $(this).val();
        var changedValueState = $('#state').val();
        $.ajax({
            url: '../ajax/get-ibm-by-state-district-array',
            type: "POST",
            data: ({
                district: changedValue,
                state: changedValueState
            }),
            beforeSend: function (xhr) {
                xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
            },
            success: function (resp) {
                $('#ibm')
                    .find('option')
                    .remove();
                var mySelect = $('#ibm');
                mySelect.append(resp);
            }
        });
    });

    $("#ibm").change(function () {
        var changedValue = $(this).val();
        $.ajax({
            url: '../ajax/get-mine-name-by-ibm-array',
            type: "POST",
            data: ({
                ibm: changedValue,
            }),
            beforeSend: function (xhr) {
                xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
            },
            success: function (resp) {
                $('#minename')
                    .find('option')
                    .remove();
                var mySelect = $('#minename');
                mySelect.append(resp);
            }
        });
    });

    $("#ibm").change(function () {
        var changedValue = $(this).val();
        $.ajax({
            url: '../ajax/get-lessee-owner-by-ibm-array',
            type: "POST",
            data: ({
                ibm: changedValue,
            }),
            beforeSend: function (xhr) {
                xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
            },
            success: function (resp) {
                $('#owner')
                    .find('option')
                    .remove();
                var mySelect = $('#owner');
                mySelect.append(resp);
            }
        });
    });

    //Commented because Lessee Area is not mention in any table it will uncomment in future
    // $("#ibm").change(function () {
    //     var changedValue = $(this).val();
    //     $.ajax({
    //         url: '../ajax/get-lessee-area-by-ibm-array',
    //         type: "POST",
    //         data: ({
    //             ibm: changedValue,
    //         }),
    //         beforeSend: function (xhr) {
    //             xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
    //         },
    //         success: function (resp) {
    //             $('#area')
    //                 .find('option')
    //                 .remove();
    //             var mySelect = $('#area');
    //             mySelect.append(resp);
    //         }
    //     });
    // });

    $("#ibm").change(function () {
        var changedValue = $(this).val();
        $.ajax({
            url: '../ajax/get-mine-code-by-ibm-array',
            type: "POST",
            data: ({
                ibm: changedValue,
            }),
            beforeSend: function (xhr) {
                xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
            },
            success: function (resp) {
                $('#minecode')
                .find('option')
                .remove();
            var mySelect = $('#minecode');
            mySelect.append(resp);
        }
        });
});

});

$(function () {
    $(".monthDate").datepicker({
        dateFormat: 'MM yy',
        changeMonth: true,
        changeYear: true,
        yearRange: '2011:'+(new Date).getFullYear(),
        showButtonPanel: true,
        onClose: function (dateText, inst) {
            $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
        }
    });
});

$(document).ready(function () {
    //Table indexing start from 0 groupColumn = 2 means 3rd column & groupColumn = 1 means 2nd column
    var showDate = 1
    var mineral = 2;
    var state = 3;
    var district = 4;
    var minecode = 5;
    var minename = 6;
    var lesseename = 7;
    // var lessearea = 8; uncomment afterward when lessee area is present in table
    var ibm = 8;
    var table = $('#tableReport').DataTable({
        // "searching": true,
        // dom: 'Btirp',
        // buttons: [{
        //     extend: 'csvHtml5',
        //     text: 'Export CSV',
        //     filename: 'csv_file',
        //     footer: true
        // },
        // {
        //     extend: 'excelHtml5',
        //     text: 'Export Excel',
        //     filename: 'excel_file',
        //     footer: true
        // },
        // {
        //     extend: 'pdfHtml5',
        //     text: 'Export PDF',
        //     filename: 'pdf_file',
        //     footer: true
        // }],

        dom: 'Bfrtip',
        buttons: [
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5'
        ],
        "pageLength": 25,
        "columnDefs": [
            { "visible": false, "targets": [showDate, mineral, state, district, minecode, minename, lesseename,  ibm] } //this will not display in table when shown in group
        ],

        "rowGroup": {
            dataSrc: [showDate, mineral, state, district, minecode, minename, lesseename,  ibm]
        },

        "drawCallback": function (settings) {
            var api = this.api();
            var rows = api.rows({ page: 'current' }).nodes();
            var last = null;

            api.column(showDate, { page: 'current' }).data().each(function (group, i) {
                if (last !== group) {
                    $(rows).eq(i).before(
                        '<tr class="group"><td class="groupWeight" colspan="37">' + group + '</td></tr>'
                    );

                    last = group;
                }
            });
            api.column(mineral, { page: 'current' }).data().each(function (group, i) {
                if (last !== group) {
                    $(rows).eq(i).before(
                        '<tr class="group"><td class="groupWeight" colspan="37">' + group + '</td></tr>'
                    );

                    last = group;
                }
            });
            api.column(state, { page: 'current' }).data().each(function (group, i) {
                if (last !== group) {
                    $(rows).eq(i).before(
                        '<tr class="group"><td class="groupWeight" colspan="37">' + group + '</td></tr>'
                    );

                    last = group;
                }
            });

            api.column(district, { page: 'current' }).data().each(function (group, i) {
                if (last !== group) {
                    $(rows).eq(i).before(
                        '<tr class="group"><td class="groupWeight" colspan="37">' + group + '</td></tr>'
                    );

                    last = group;
                }
            });

            api.column(minecode, { page: 'current' }).data().each(function (group, i) {
                if (last !== group) {
                    $(rows).eq(i).before(
                        '<tr class="group"><td class="groupWeight" colspan="37">' + group + '</td></tr>'
                    );

                    last = group;
                }
            });

            api.column(minename, { page: 'current' }).data().each(function (group, i) {
                if (last !== group) {
                    $(rows).eq(i).before(
                        '<tr class="group"><td class="groupWeight" colspan="37">' + group + '</td></tr>'
                    );

                    last = group;
                }
            });

            api.column(lesseename, { page: 'current' }).data().each(function (group, i) {
                if (last !== group) {
                    $(rows).eq(i).before(
                        '<tr class="group"><td class="groupWeight" colspan="37">' + group + '</td></tr>'
                    );

                    last = group;
                }
            });

            // api.column(lessearea, { page: 'current' }).data().each(function (group, i) {
            //     if (last !== group) {
            //         $(rows).eq(i).before(
            //             '<tr class="group"><td class="groupWeight" colspan="18">' + group + '</td></tr>'
            //         );

            //         last = group;
            //     }
            // });

            api.column(ibm, { page: 'current' }).data().each(function (group, i) {
                if (last !== group) {
                    $(rows).eq(i).before(
                        '<tr class="group"><td class="groupWeight" colspan="37">' + group + '</td></tr>'
                    );

                    last = group;
                }
            });
        }
    });
});

