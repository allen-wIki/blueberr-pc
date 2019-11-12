import React, { Component } from 'react';

import style from './interesting.module.css';

import interestingImg from '@assets/img/home/interesting.png';

import img from '@assets/img/home/interesting-img.png'

import Swiper from 'swiper/js/swiper.min.js';
import 'swiper/css/swiper.min.css';

import ArticleListTile from '../ArticleListTile';


export default class index extends Component {

  constructor() {
    super();
    this.state = {
      list: [
        {
          articleList: [
            {
              imgUrl: img,
              title: '岁月不老，一世倾城',
              time: '5/23  16:15',
              author: '小夏同学',
              content: '时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...',
              thumbUpNumber: 22,
              numberOfReviews: 20
            }, {
              imgUrl: img,
              title: '岁月不老，一世倾城',
              time: '5/23  16:15',
              author: '小夏同学',
              content: '时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...',
              thumbUpNumber: 22,
              numberOfReviews: 20
            },
            {
              imgUrl: img,
              title: '岁月不老，一世倾城',
              time: '5/23  16:15',
              author: '小夏同学',
              content: '时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...',
              thumbUpNumber: 22,
              numberOfReviews: 20
            },
            {
              imgUrl: img,
              title: '岁月不老，一世倾城',
              time: '5/23  16:15',
              author: '小夏同学',
              content: '时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...',
              thumbUpNumber: 22,
              numberOfReviews: 20
            }
          ]
        },
        {
          articleList: [
            {
              imgUrl: img,
              title: '岁月不老，一世倾城',
              time: '5/23  16:15',
              author: '小夏同学',
              content: '时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...',
              thumbUpNumber: 22,
              numberOfReviews: 20
            }, {
              imgUrl: img,
              title: '岁月不老，一世倾城',
              time: '5/23  16:15',
              author: '小夏同学',
              content: '时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...',
              thumbUpNumber: 22,
              numberOfReviews: 20
            },
            {
              imgUrl: img,
              title: '岁月不老，一世倾城',
              time: '5/23  16:15',
              author: '小夏同学',
              content: '时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...',
              thumbUpNumber: 22,
              numberOfReviews: 20
            },
            {
              imgUrl: img,
              title: '岁月不老，一世倾城',
              time: '5/23  16:15',
              author: '小夏同学',
              content: '时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...',
              thumbUpNumber: 22,
              numberOfReviews: 20
            }
          ]
        }
      ]
    }
  }

  // 组件挂载完毕执行
  componentDidMount() {
    new Swiper('.interesting_swiper_wrap', {
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
  render() {
    return (
      <div className={style.interesting_wrap}>
        <div className={style.movement_main}>
          <ArticleListTile title="乐 趣" img={interestingImg} english_name="INTERESTING" />
          <div className="interesting_swiper_wrap">
            <div className="swiper-wrapper">
              {
                this.state.list.map((items, index) => {
                  return (
                    <div key={index} className="swiper-slide">
                      <div className={style.list_wrap}>
                        {
                          items.articleList.map((item, sub) => {
                            return (
                              <div key={sub} className={style.list_item}>
                                <div className={style.list_item_img}>
                                  <img src={item.imgUrl} alt="加载失败" />
                                </div>
                                <div className={style.list_item_content_wrap}>
                                  <div className={style.list_item_content_title}>{item.title}</div>
                                  <div className={style.list_item_author_wrap}>
                                    <span className={style.list_item_author}>{item.author}</span>
                                    <span className={style.list_item_time}>{item.time}</span>
                                  </div>
                                  <div className={style.list_item_content}>{item.content}</div>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="swiper-pagination" style={{ top: '350px' }}></div>
          </div>
        </div>
      </div>
    )
  }
}
