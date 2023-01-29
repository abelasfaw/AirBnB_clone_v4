// executes only when DOM is loaded and monitors state of checkboxes

let checked_boxes = {};
$(document).ready(() =>{
    $('input:checkbox').change(() => {
	if ($(this).is(':checked_box')) {
	    checked_boxes[$(this).data('id')] = $(this).data('name');
	}
	else {
	    delete checked_boxes[$(this).data('id')];
	}
	$('div.amenities h4').html(() => {
	    let amenities = [];
	    Object.keys(checked_box).forEach((key) => {
		amenities.push(checked_box[key]);
	    });
	    if (amenities.length === 0) {
		return ('&nbsp');
	    }
	    return (amenities.join(', '));
	});
    });
});
const statusDiv = $('DIV#api_status');
$.ajax('http://0.0.0.0:5001/api/v1/status/').done((data) => {
    if (data.status === 'OK') {
      statusDiv.addClass('available');
    } else {
      statusDiv.removeClass('available');
    }
  });
});
