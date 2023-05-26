jQuery.fn.extend({
    rollNumber({ num }) {
      let $children = $(this).children()
      $children.addClass('roll-box').html(new Array(10).fill('0').map((_, i) => {
        return `<span class="roll-el">${i}</span>`
      }))
      function update(num) {
        let nums = num.toString().split("").reverse()
        Array.from($children).reverse().forEach((rollBox, i) => {
          $(rollBox).children().css('transform', `translateY(-${nums[i] || 0}00%)`)
        })
      }
      setTimeout(() => {
        update(num)
      }, 100)
      return update
    }
  })