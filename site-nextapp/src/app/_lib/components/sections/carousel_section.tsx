"use client"
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CarouselSection({
  children, child_width = 40, child_height = 22.5,
}: Readonly<{
  children: React.ReactNode[];
  child_width?: number;
  child_height?: number;
}>){
    const [index,setIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const transitioningOutSlide = useRef<number | null>(null);
    
    const increaseIndex = () => {
        transitioningOutSlide.current = index;
        setIndex((prev) => prev = (prev + 1 > children.length - 1 ? 0 : prev + 1));
    }
    const decreaseIndex = ()=>{
        transitioningOutSlide.current = index;
        setIndex((prev) => ((prev - 1) < 0 ? children.length - 1 : prev - 1 ));
    }

    useEffect(() => {
        // Clear transitioning slide after animation completes
        const timer = setTimeout(() => {
            transitioningOutSlide.current = null;
        }, 350); // Match your CSS transition duration

        return () => clearTimeout(timer);
    }, [index]);

    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
        setIsDragging(true);
    };

    const onTouchMove = (e: React.TouchEvent) => {
       if (!touchStart) return;
    
        const currentTouch = e.targetTouches[0].clientX;
        const diff = currentTouch - touchStart;
    
        setTouchEnd(currentTouch);
        setDragOffset(diff);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) {
            setIsDragging(false);
            setDragOffset(0);
            return;
        }
    
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
    
        if (isLeftSwipe) {
            increaseIndex();
        }
        if (isRightSwipe) {
            decreaseIndex();
        }
    
        // Reset immediately
        setIsDragging(false);
        setDragOffset(0);
    };

    const getZIndex = (ind:number) => {
        if (ind > index){
            if(ind == index + 1){ // If the slide index is one ahead of the current, put it behind the current but above the others.
                return "z-10";
            }
            return "z-1 opacity-0"; // Default to moving it back behind.
        }
        else if (ind < index){
            if(ind == index - 1){ // If the slide index is one behind the current.
                return "z-10";
            }
            return "z-1 opacity-0"; // Default to moving it back behind.
        }
        return ""; // If the slide index is the index, we let the classtype function handle z-order
    }

    const getClassType = (totalSlides:number, isCurrentSlide:boolean, isNextSlide:boolean, isPrevSlide:boolean, ind:number, prevIndex:number) => {
        const isTransitioningOut = ind === transitioningOutSlide.current;
        if (index - 1 < 0 && ind == (children.length - 1)){ // If the next slide left is less than 0, and the slide index is the final one, set it left.
            return "carousel-left-element";
        }
        if (index + 1 > (children.length - 1) && ind == 0){ // If the next slide right is greater than the last index, and the slide index is 0, set it right.
            return "carousel-right-element";
        }
        if (ind > index){ // If the slide index is greater than the current index.
            return "carousel-right-element";
        }
        if (ind < index){ // If the slide index is less than the current index.
            
            return "carousel-left-element";
        }
        if (ind == index){
            return "z-10";
        }

        // if (ind === 3 && transitioningOutSlide.current === 1) {
        //     console.log(`Slide 3 during 1→0: isCurrentSlide=${isCurrentSlide}, isNextSlide=${isNextSlide}, isPrevSlide=${isPrevSlide}, isTransitioningOut=${isTransitioningOut}`);
        // }
        
        // if (isCurrentSlide) {
        //     return 'z-10';
        // }
        
        // if (isTransitioningOut) {
        //     let movedLeft;
        //     const oldIndex = transitioningOutSlide.current!;
        //     if (oldIndex === 0 && index === totalSlides - 1) {
        //         movedLeft = false;
        //     } else if (oldIndex === totalSlides - 1 && index === 0) {
        //         movedLeft = true;
        //     } else {
        //         movedLeft = index > oldIndex;
        //     }
        //     console.log(`Slide ${ind} transitioning out, movedLeft=${movedLeft}`);
        //     return movedLeft ? 'carousel-left-element' : 'carousel-right-element';
        // }
        
        // if (!isNextSlide && !isPrevSlide) {
        //     return 'carousel-right-element opacity-0';
        // }
        
        // if (isNextSlide) {
        //     return 'carousel-right-element';
        // }
        
        // if (isPrevSlide) {
        //     return 'carousel-left-element';
        // }
        
        // return 'carousel-right-element opacity-0';
    }

    return(
        <div className="carousel-section"
            style={{
            '--child-aspect': child_height / child_width
        } as React.CSSProperties}
        >
            <button onClick={decreaseIndex} className="carousel-chevron-button -mr-15"><ChevronLeft size={"1rem"}/></button>
            <ul className={`carousel-container relative grid grid-cols-1 grid-rows-1 overflow-clip rounded-lg m-4 w-[99vw] md:w-[60vw]`}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                >
                {children.map((child, ind) => {
                    // Calculate if this slide should be visible considering wrap-around
                    const totalSlides = children.length;
                    const isCurrentSlide = ind === index;
                    const isNextSlide = ind === (index + 1) % totalSlides;
                    const isPrevSlide = ind === (index - 1 + totalSlides) % totalSlides;
                    //const wasCurrentSlide = ind === prevIndex;
    
                    let positionClass = getClassType(totalSlides, isCurrentSlide, isNextSlide, isPrevSlide, ind, prevIndex);
                    //let zOrderClass = getZIndex(ind);

                    return (
                        <li 
                            key={`element-${ind}`} 
                            className={`carousel-element w-full h-full ${positionClass}`}
                            style={{
                                transform: (isDragging && (isCurrentSlide || isNextSlide || isPrevSlide)) ? `translateX(${dragOffset}px)` : undefined,
                                transition: (isDragging && (isCurrentSlide || isNextSlide || isPrevSlide)) ? 'none' : undefined,
                                zIndex: (isDragging && (isCurrentSlide || isNextSlide || isPrevSlide)) ? 50 : undefined
                            }}
                        >
                            {child}
                        </li>
                    );
                })}
            </ul>
            <button onClick={increaseIndex} className="carousel-chevron-button -ml-15"><ChevronRight size={"1rem"}/></button>
        </div>
    )
}