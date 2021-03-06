/**
 * This file is part of Invenio.
 * Copyright (C) 2014, 2015 CERN.
 *
 * Invenio is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * Invenio is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Invenio; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.
 */

define(function(require, exports, module) {
  var $ = require('jquery'),
    bootstrap = require('bootstrap'),
    tpl_list_modal = require('hgn!./templates/modal_list');

  $("body").on("click", "a[data-show-more]", function() {

    // get json from data-items attribute
    var raw_data_items = $(this).data('items');
    var data_items = $.map(raw_data_items, function(e) { return ({item: e})});

    var modal_id = Date.now();

    var page_size = $(this).data('page-size');

    var modalContext = {
      'modal_id': modal_id,
      'list_items': data_items,
      'title': $(this).data('title'),
      'close': $(this).data('close-button'),
      'paginate': data_items.length > page_size
    };
    var modal_reference = "#" + modal_id;

    var modal_instance = tpl_list_modal(modalContext);
    $("body").append(modal_instance);

    // remove modal after it is hidden
    $(modal_reference).modal({show: true}).on('hidden.bs.modal', function() {
      $(modal_reference).remove();
    });

    // pagination
    if (data_items.length > page_size) {

      var listElement = $('#pages');

      var last_index = page_size;

      listElement
        .children().css('display', 'none')
        .slice(0, page_size).css('display', 'list-item');

      $('#cds-modal-expand-btn').on('click', function() {
        if (last_index + page_size >= data_items.length) {
          last_index = data_items.length;
          $('#cds-modal-expand-btn').attr('disabled', true);
        }
        else {
          last_index = last_index + page_size;
        }

        listElement
          .children().css('display', 'none')
          .slice(0, last_index).css('display', 'list-item');

      });

    }

  });

});
