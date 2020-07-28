<template>
  <div class="list" ref="listWrapper">
    <div>
      <div class="city-list">
        <div class="hot-city">热门城市</div>
        <ul class="hot-list clearfix">
          <!-- <li v-for="item of computedCities" :key="item.id" :class="item.borderType">{{item.name}}</li> -->
          <li v-for="item of computedCities" :key="item.id" :class="item.borderType">{{item.name}}</li>
          <!-- <li class="border-right">北京</li>
          <li class="border-right">上海</li>
          <li>三亚</li>
          <li class="border-topright">香港</li>
          <li class="border-topright">杭州</li>
          <li class="border-top">广州</li>
          <li class="border-topright">成都</li>
          <li class="border-topright">深圳</li>
          <li class="border-top">苏州</li>
          <li class="border-topright">桂林</li>
          <li class="border-topright">西安</li>
          <li class="border-top">厦门</li> -->
        </ul>
      </div>
      <div class="alp">
        <div class="alp-title">字母排序</div>
        <ul class="alp-list clearfix">
          <li v-for="(item, index) of letters" :key="index" @click="handClick">{{item}}</li>
          <!-- <li v-for="(item, index) of cities" :key="index">{{index}}</li> -->
          <!-- <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
          <li>F</li>
          <li>G</li>
          <li>H</li>
          <li>J</li>
          <li>K</li>
          <li>L</li>
          <li>M</li>
          <li>N</li>
          <li>P</li>
          <li>Q</li>
          <li>R</li>
          <li>S</li>
          <li>T</li>
          <li>W</li>
          <li>X</li>
          <li>Y</li>
          <li>Z</li> -->
        </ul>
      </div>
      <div class="list-alp" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="alp-list-title">{{key}}</div>
        <ul class="title-list clearfix">
          <li v-for="innerItem in item" :key="innerItem.id">{{innerItem.name}}</li>
          <!-- <li>安康</li>
          <li>安康</li>
          <li>安康</li>
          <li>安康</li>
          <li>安康</li>
          <li>安康</li>
          <li>安康</li>
          <li>安康</li>
          <li>安康</li>
          <li>安康</li>
          <li>安康</li>
          <li>安康</li>
          <li>安康</li>
          <li>安康</li>
          <li>安康</li>
          <li>安康</li>
          <li>安康</li>
          <li>安康</li> -->
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object
  },
  data: function () {
    return {
      letter: ''
    }
  },
  methods: {
    handClick: function (e) {
      this.letter = e.target.innerText
      // console.log(e.target.innerText)
    }
  },
  computed: {
    computedCities: function () {
      var result = []
      // var length = this.hotCities.length
      // var item
      // for (var i = 0; i < length; i++) {
      //   var resObj = {}
      //   item = this.hotCities[i]
      //   resObj.name = item.name
      //   resObj.id = item.id
      //   if (item.order === 1) {
      //     resObj.borderType = ''
      //   } else if (item.order === 2 || item.order === 3) {
      //     resObj.borderType = 'border-left'
      //   } else if (item.order % 3 === 1) {
      //     resObj.borderType = 'border-top'
      //   } else {
      //     resObj.borderType = 'border-topleft'
      //   }
      //   result.push(resObj)
      // }
      for (var i of this.hotCities) {
        var resObj = {}
        resObj.name = i.name
        resObj.id = i.id
        if (i.order === 1) {
          resObj.borderType = ''
        } else if (i.order === 2 || i.order === 3) {
          resObj.borderType = 'border-left'
        } else if (i.order % 3 === 1) {
          resObj.borderType = 'border-top'
        } else {
          resObj.borderType = 'border-topleft'
        }
        result.push(resObj)
      }
      return result
    },
    letters: function () {
      var letters = []
      for (var i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  // data: function () {
  //   return {
  //     cityList: [
  //       {
  //         id: '1',
  //         name: '北京'
  //       },
  //       {
  //         id: '2',
  //         name: '上海'
  //       },
  //       {
  //         id: '3',
  //         name: '北京'
  //       },
  //       {
  //         id: '4',
  //         name: '上海'
  //       },
  //       {
  //         id: '5',
  //         name: '北京'
  //       },
  //       {
  //         id: '6',
  //         name: '上海'
  //       }
  //     ]
  //   }
  // },
  mounted: function () {
    this.scroll = new BScroll(this.$refs.listWrapper)
  },
  updated: function () {
    // console.log(this.$refs)
  },
  watch: {
    letter: function () {
      if (this.letter) {
        // console.log(this.letter)
        var element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '../../../assets/styles/variables.styl';
  .list .city-list{
    width: 100%;
    height: 4.32rem;
  }

  .border-top.bc{
    border-color: red;
  }

  .clearfix::after{
    display: block;
    content: '';
    clear: both;
  }

  .list{
    position: absolute;
    top: .88rem;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    overflow: hidden;
  }

  .list .city-list .hot-city,
  .alp .alp-title,
  .alp-list-title{
    padding: 0 .2rem;
    height: .72rem;
    line-height: .72rem;
    text-align: left;
  }

  .city-list .hot-list{
    width: 100%;
  }

  .city-list .hot-list li{
    float: left;
    width: 33.33%;
    height: .9rem;
    text-align: center;
    line-height: .9rem;
    color: #424242;
  }

  .alp{
    width: 100%;
    height: 4.32rem;
  }

  .alp .alp-list{
    width: 100%;
  }

  .alp .alp-list li{
    float: left;
    width: 16.66%;
    height: .9rem;
    text-align: center;
    line-height: .9rem;
  }

  .list-alp .title-list li{
    float: left;
    width: 25%;
    height: .9rem;
    text-align: center;
    line-height: .9rem;
  }
</style>
