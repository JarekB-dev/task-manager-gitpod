document.addEventListener('DOMContentLoaded', function () {
  let sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);


  // modal
  let modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);


  // datepicker initialization
  let datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmmm, yyyy",
    i18n: {
      done: "Select"
    }
  })

  let selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);
});