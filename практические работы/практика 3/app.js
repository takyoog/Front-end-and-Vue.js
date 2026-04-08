const { createApp } = Vue;
createApp({
  data() {
    return {
      surname: '',
      name: '',
      email: '',
      phone: '',
      showResult: false,
      isDark: false,
      submitted: {
        surname: '',
        name: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {
    submitForm() {
      this.submitted.surname = this.surname;
      this.submitted.name = this.name;
      this.submitted.email = this.email;
      this.submitted.phone = this.phone;
      this.showResult = true;
    },
    toggleTheme() {
      this.isDark = !this.isDark;
      if (this.isDark) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }
  },
  mounted() {
    if (this.isDark) {
      document.body.classList.add('dark');
    }
  }
}).mount('#app');