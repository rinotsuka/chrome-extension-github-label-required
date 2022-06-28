$(() => {
  const $createPullRequestButton = $('.js-details-target.btn-primary.btn')
  const $submitButton = $('.hx_create-pr-button.js-sync-select-menu-button.btn-primary.btn.BtnGroup-item.flex-auto')
  const $labelsSelectMenu = $('#labels-select-menu .select-menu-modal.position-absolute.right-0.hx_rsm-modal.js-discussion-sidebar-menu')

  $createPullRequestButton.on('click', () => {
    controlSubmitButton()
  })

  $(document).ready(function(){
    controlSubmitButton()
  })

  const controlSubmitButton = () => {
    $('[data-cache-name="labels"]').ready(() => {
      checkLabels()
    })
    $labelsSelectMenu.ready(() => {
      $(document).on('click', event => {
        if(!$(event.target).closest($labelsSelectMenu).length) {
          checkLabels()
        }
     });
    })
  }

  const checkLabels = () => {
    var $form = $('#new_pull_request');
    var param = $form.serializeArray();
    var isDisabled = !param.some(item => item.name === 'issue[labels][]' && item.value)
    if ($submitButton.text().trim() === 'Draft pull request') return $submitButton.prop("disabled", false)
    $submitButton.prop("disabled", isDisabled)
  }
})

