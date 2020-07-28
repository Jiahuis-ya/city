<template>
  <div>
    <city-header></city-header>
    <city-list :hotCities="hotCities" :cities="cities"></city-list>
  </div>
</template>

<script>
import CityHeader from '@/pages/city/child/Header'
import CityList from '@/pages/city/child/List'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    'city-header': CityHeader,
    'city-list': CityList
  },
  data: function () {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getCityInfo: function () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSuccess)
    },
    getCityInfoSuccess: function (res) {
      var data = res.data.data
      this.cities = data.cities
      this.hotCities = data.hotCities
    }
  },
  mounted: function () {
    this.getCityInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
