app.component('review-form', {
  template:
  /*html*/
  `
<form class="review-form" @submit.prevent="onSubmit">
  <h3>Leave a review</h3>

  <ul v-show="errors.length > 0">
    <li v-for="error in errors">
      <span v-html="error" :style="{color: 'red'}"></span>
    </li>
  </ul>

  <label for="name">Name:</label>
  <input id="name" v-model="name">

  <fieldset>
    <legend>Would you recommend this product?</legend>

    <label for="recommended0">Yes&nbsp;</label>
    <input type="radio" id="recommended0" value="Y" v-model="recommended">

    <label for="recommended1">No&nbsp;</label>
    <input type="radio" id="recommended1" value="N" v-model="recommended">
  </fieldset>

  <label for="review">Review:</label>
  <textarea id="review" v-model="review"></textarea>

  <label for="rating">Rating:</label>
  <select id="rating" v-model.number="rating">
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
  </select>

  <input class="button" type="submit" value="Submit">
</form>
  `,
  data() {
    return {
      name: '',
      review: '',
      rating: null,
      recommended: null,
      errors: []
    }
  },
  methods: {
    onSubmit() {
      console.log('recommended', typeof(this.recommended));
      // Perform basic validation
      if (!this.name || !this.review || !this.rating) {
        this.errors = [];
        if (!this.name) this.errors.push("<b>Name</b> is a required field.")
        if (!this.review) this.errors.push("<b>Review</b> is a required field.")
        if (!this.rating) this.errors.push("<b>Rating</b> is a required field.")
        if (!this.recommended) this.errors.push("<b>Would you recommend this product?</b> is required.")
      } else {
        this.errors = [];

        const productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recommended: this.recommended === "Y"
        }

        this.$emit('review-submitted', productReview)

        this.name = ''
        this.review = ''
        this.rating = null
        this.recommended = null
      }
    }
  }
})