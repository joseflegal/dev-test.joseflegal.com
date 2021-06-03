import { createLocalVue, mount, shallow } from "@vue/test-utils";
import Gallery from "@/components/Gallery.vue";
import Vuex from 'vuex';

const localVue = createLocalVue()
localVue.use(Vuex);

describe("Gallery", () => {
  let store
  let wrapper
  beforeEach(() => {
  
    wrapper = mount(Gallery, { 
      localVue, 
      computed:{
        filteredFiles: jest.fn()
      },
      data() {
        return {
          isFilteringKitten: false
        }
      },
      slots: {
        default: 'Test Title'
      }
    })
  })

  it("the component renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("the slot shows the right title", () => {
    expect(wrapper.find("h1").text()).toBe("Test Title")
  })

  it("the state isFilteringKitten(boolean) switches when the filter button is clicked", async() => {
    await wrapper.find('div.button-container').trigger('click')
    expect(wrapper.vm.$data.isFilteringKitten).toBe(true)
  })
});

