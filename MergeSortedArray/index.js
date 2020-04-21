var merge = function(nums1, m, nums2, n) {
    return typeof nums2 !== "undefined" ? nums1.slice(0, m).concat(nums2.slice(0, n)).sort((a, b) => a - b) : nums1.slice(0, m);
};