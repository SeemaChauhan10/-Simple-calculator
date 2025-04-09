const button = document.querySelector('button');
button.addEventListener('click',()=>{
    const first1 = document.getElementById('first');
    const nums1 = Number(first1.value);
    const second2 = document.getElementById('second');
    const nums2 = Number(second2.value);
    const result = nums1+nums2;
    const re = document.getElementById('result');
    re.textContent = "Result:"+result;
});

