def twoSum(self, numbers: List[int], target: int) -> List[int]:

    n=len(numbers)
    l=0
    r=n-1
    res=[]

    while (l<=r):
        
        curSum=numbers[l]+numbers[r]

        if curSum>target:
            r-=1
        elif curSum<target:
            l+=1
        else:
            
            res.append(l+1)
            res.append(r+1)
            break
    
    return res

        
        