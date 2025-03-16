'use client'

import { useState, useMemo } from 'react'
import { Card } from './ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

// 照片数据
const photos = [
  {
    id: 1,
    title: '春日野游',
    date: '2024-03-15',
    description: '春天和朋友一起去野游',
    images: [
      'https://picsum.photos/seed/spring1/800/600',
      'https://picsum.photos/seed/spring2/800/600',
      'https://picsum.photos/seed/spring3/800/600'
    ]
  },
  {
    id: 2,
    title: '樱花季',
    date: '2024-03-10',
    description: '樱花盛开的季节',
    images: [
      'https://picsum.photos/seed/cherry1/800/600',
      'https://picsum.photos/seed/cherry2/800/600',
      'https://picsum.photos/seed/cherry3/800/600'
    ]
  },
  {
    id: 3,
    title: '新年',
    date: '2024-02-10',
    description: '新年全家福',
    images: [
      'https://picsum.photos/seed/newyear1/800/600',
      'https://picsum.photos/seed/newyear2/800/600',
      'https://picsum.photos/seed/newyear3/800/600'
    ]
  },
  {
    id: 4,
    title: '圣诞节',
    date: '2023-12-25',
    description: '圣诞节的装饰',
    images: [
      'https://picsum.photos/seed/christmas1/800/600',
      'https://picsum.photos/seed/christmas2/800/600',
      'https://picsum.photos/seed/christmas3/800/600'
    ]
  },
  {
    id: 5,
    title: '下雪了',
    date: '2023-12-20',
    description: '今年的第一场雪',
    images: [
      'https://picsum.photos/seed/snow1/800/600',
      'https://picsum.photos/seed/snow2/800/600',
      'https://picsum.photos/seed/snow3/800/600'
    ]
  },
  {
    id: 6,
    title: '秋游',
    date: '2023-10-15',
    description: '秋天的公园',
    images: [
      'https://picsum.photos/seed/autumn1/800/600',
      'https://picsum.photos/seed/autumn2/800/600',
      'https://picsum.photos/seed/autumn3/800/600'
    ]
  }
]

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [emblaRef, emblaApi] = useEmblaCarousel()

  // 按年月对照片进行分组
  const groupedPhotos = useMemo(() => {
    const groups = {}
    
    photos.forEach(photo => {
      const date = new Date(photo.date)
      const year = date.getFullYear()
      const month = date.getMonth() + 1 // JavaScript 月份从 0 开始
      
      if (!groups[year]) {
        groups[year] = {}
      }
      if (!groups[year][month]) {
        groups[year][month] = []
      }
      
      groups[year][month].push(photo)
    })
    
    return groups
  }, [])

  const handlePrevious = () => {
    if (emblaApi) emblaApi.scrollPrev()
  }

  const handleNext = () => {
    if (emblaApi) emblaApi.scrollNext()
  }

  // 获取月份名称
  const getMonthName = (month) => {
    return new Date(2024, month - 1, 1).toLocaleString('zh-CN', { month: 'long' })
  }

  return (
    <>
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-7xl">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">照片墙</h1>
        
        {/* 年份循环 */}
        {Object.entries(groupedPhotos)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, months]) => (
            <div key={year} className="mb-8 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 sticky top-0 bg-background/95 backdrop-blur py-2 sm:py-4 z-10">
                {year}年
              </h2>
              
              {/* 月份循环 */}
              {Object.entries(months)
                .sort(([monthA], [monthB]) => Number(monthB) - Number(monthA))
                .map(([month, monthPhotos]) => (
                  <div key={`${year}-${month}`} className="mb-6 sm:mb-12">
                    <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 text-muted-foreground">
                      {getMonthName(Number(month))}
                    </h3>
                    
                    {/* 照片网格 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {monthPhotos.map(photo => (
                        <Card 
                          key={photo.id}
                          className="overflow-hidden cursor-pointer group py-0"
                          onClick={() => setSelectedPhoto(photo)}
                        >
                          <div className="relative aspect-[4/3]">
                            <Image
                              src={photo.images[0]}
                              alt={photo.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                          <div className="p-2.5 sm:p-4">
                            <h4 className="text-sm sm:text-base font-medium mb-0.5 sm:mb-1">{photo.title}</h4>
                            <p className="text-xs sm:text-sm text-muted-foreground">{photo.date}</p>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          ))}
      </div>

      {/* 照片查看对话框 */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl p-0 h-[90vh] max-h-[900px] flex flex-col">
          <DialogHeader className="p-4 sm:p-6 pb-0">
            <DialogTitle className="text-base sm:text-lg">{selectedPhoto?.title}</DialogTitle>
          </DialogHeader>
          
          <div className="relative flex-1 min-h-0">
            <div className="overflow-hidden h-full" ref={emblaRef}>
              <div className="flex h-full">
                {selectedPhoto?.images.map((image, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 h-full">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={image}
                        alt={`${selectedPhoto.title} - 图片 ${index + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                        priority
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button
              onClick={handlePrevious}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/70 z-10"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/70 z-10"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          <div className="p-4 sm:p-6 pt-3 sm:pt-4">
            <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-4">{selectedPhoto?.date}</p>
            <p className="text-sm sm:text-base text-gray-600">{selectedPhoto?.description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
} 