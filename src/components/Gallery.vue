<template>
    <!-- Component Container -->
    <div class="gallery-container">
      <!-- Header Container (Slot)-->
      <div class="header-container">
        <h1 class="title"><slot></slot></h1>
          <div class="button-container" @click="isFilteringKitten=!isFilteringKitten">
            <JoCircleButton title='cat' icon='fa-cat' :variant="isFilteringKitten ? 'light' : 'white'"></JoCircleButton>
          </div>
      </div>
      <!-- Cards Container -->
      <div class="cards-container">
        <!-- Card -->
        
        <div class="card"
          v-for="file in filteredFiles" 
          :key="file.id" 
          :file="file"
        >
          <!-- Background Image -->
          <div class="background-image" :style="{backgroundImage: `url(${file.src})`}"></div>
          <!-- Description -->
          <div class="description-container">
            <span class="description-text">
             {{file.description}}
             <br>
             {{file.date}}
            </span>
          </div>
        </div>
      </div>        
    </div>
</template>

<script>
  import JoCircleButton from '@/components/globals/JoCircleButton.vue';
  
  export default{
    components:{
      'JoCircleButton': JoCircleButton
    },
    name: "Gallery",
    data: function() {
      return {
        isFilteringKitten: false,
      }
    },
    computed: {
      filteredFiles: function() {
        const files = this.$store.getters['gallery/getFiles'];
        if(this.isFilteringKitten){
          return files
            .filter(file => file.tags.includes("kitten"))
            .sort((a, b) => {
              var d1 = new Date(a.date);
              var d2 = new Date(b.date);
              return d2-d1;
            })
        } else{
          return files;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/styles/_resources.scss";

  .gallery-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: $base-font-family;
    font-size: $rootsize-base;
    width: 100%;

    .header-container{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 48px;
      position: relative;
      margin-bottom: 2rem;

      .title {
        text-align: center;
        font-weight: $weight-bold;
        margin: 0;
      }

      .button-container{
        position: absolute;
        right: 5%;

        button{
          border: none;
        }
      }
    }

    .cards-container{
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      width: 100%;

      .card{
        position: relative;
        display: flex;
        overflow: hidden;
        margin: 0 2rem 2rem 0;
        width: calc(25% - 2rem);
        height:  300px;
        background-size: cover;
        background-position: center center;
        border-radius: $base-border-radius;
        box-shadow: $shadow-base;
    
        &:hover{
          box-shadow: $shadow-hover;
          
          .background-image{
          transform: scale(1.1);
          }

          .description-container{
            opacity: 0.95;
          }
        }

        .background-image{
          height: 100%;
          width: 100%;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          transition: transform $base-duration ;
        }

        .description-container{
          position: absolute;
          width: 100%;
          height: 100%;
          color: $josef-white;
          background: rgb(0,0,0);
          background: linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,212,255,0) 100%);
          opacity: 0;
          transition:  opacity $base-duration;
          transition-timing-function: $base-timing;

          .description-text{
            position: absolute;
            bottom: 5%;
            right: 5%;
            left: 5%;
          }
        }
      }
    }
  }

  // media
  @media screen and (max-width: $medium-screen) {
    .card{
      width: calc(33.333% - 2rem)
    }
  }

    @media screen and (max-width: $small-screen) {
    .card{
      width: calc(50% - 2rem)
    }
  }
</style>