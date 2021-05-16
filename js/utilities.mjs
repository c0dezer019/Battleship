const modal = document.getElementById("alertModal");
const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(e) {
  if (e.target === modal) {
	modal.style.display = "none";
  }
};

const show = () => {
  document.getElementById('alert-modal').style.display = 'block';
};

const hide = () => {
  document.getElementById('alert-modal').style.display = 'none';
};

// Procedurally generate modal alerts.
export const generateAlert = (title, msg) => {
	$('.modalTitle').html(title);
	$('.modalMsg').html(msg);
	$('#alertModal').on('call', function () {
	  show();
	});
};

$('.modalFooter').on('click', 'button.closeButton', function () {
  hide();
});
