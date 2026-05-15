import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CommonTag from '../src/CommonTag.vue'

describe('CommonTag', () => {
  it('renders correctly', () => {
    const wrapper = mount(CommonTag, {
      props: { text: 'Test' }
    })
    expect(wrapper.text()).toContain('Test')
  })

  it('applies variant class', () => {
    const wrapper = mount(CommonTag, {
      props: { text: 'Tag', variant: 'primary' }
    })
    expect(wrapper.classes()).toContain('tag-primary')
  })
})