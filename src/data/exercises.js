// Importar imágenes de logos
import pythonLogo from '../assets/images/python-logo.webp';
import jsLogo from '../assets/images/js-logo.webp';
import javaLogo from '../assets/images/java-logo.webp';
import csharpLogo from '../assets/images/csharp-logo.webp';
import cppLogo from '../assets/images/cplusplus-logo.webp';
import reactLogo from '../assets/images/react-logo.webp';
import htmlLogo from '../assets/images/html-logo.webp';
import cssLogo from '../assets/images/css-logo.webp';

export const exercises = {
python: {
  name: "Python",
  icon: pythonLogo,
  color: "#3776ab",
  exercises: [

    // =========================
    // 🟢 EASY
    // =========================

    {
      id: 1,
      title: "FizzBuzz",
      difficulty: "Easy",
      description: "Print numbers from 1 to 100. For multiples of 3, print 'Fizz'. For multiples of 5, print 'Buzz'. For multiples of both, print 'FizzBuzz'.",
      starterCode: ``,
      solution: `# Solution: Check conditions in correct order (most restrictive first)
for i in range(1, 101):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)`,
      hints: ["Use modulo operator %", "Check FizzBuzz condition first", "Loop from 1 to 100"]
    },

    {
      id: 2,
      title: "Reverse String",
      difficulty: "Easy",
      description: "Reverse a given string.",
      starterCode: ``,
      solution: `# Solution: Python slicing provides the simplest solution
text = "hello world"
reversed_text = text[::-1]
print(reversed_text)  # dlrow olleh`,
      hints: ["String slicing", "Use [::-1]", "Alternative: reversed() function"]
    },

    {
      id: 3,
      title: "Palindrome Check",
      difficulty: "Easy",
      description: "Check if a string is a palindrome (reads the same forwards and backwards).",
      starterCode: ``,
      solution: `# Solution: Normalize string and compare with its reverse
text = "A man a plan a canal Panama"
normalized = ''.join(c.lower() for c in text if c.isalnum())
print(normalized == normalized[::-1])  # True`,
      hints: ["Remove non-alphanumeric characters", "Convert to lowercase", "Compare with reverse"]
    },

    {
      id: 4,
      title: "Count Vowels",
      difficulty: "Easy",
      description: "Count the number of vowels in a string.",
      starterCode: ``,
      solution: `# Solution: Iterate through characters and count vowels
text = "Hello World"
vowels = "aeiou"
count = sum(1 for char in text.lower() if char in vowels)
print(count)  # 3`,
      hints: ["Define vowel set", "Convert to lowercase", "Use sum with generator"]
    },

    {
      id: 5,
      title: "Find Maximum",
      difficulty: "Easy",
      description: "Find the maximum number in a list without using built-in functions.",
      starterCode: ``,
      solution: `# Solution: Iterate through list and track maximum
numbers = [3, 7, 2, 9, 4]
max_num = numbers[0]
for num in numbers:
    if num > max_num:
        max_num = num
print(max_num)  # 9`,
      hints: ["Initialize with first element", "Loop through list", "Update max when finding larger"]
    },

    {
      id: 6,
      title: "Sum List",
      difficulty: "Easy",
      description: "Calculate the sum of all elements in a list.",
      starterCode: ``,
      solution: `# Solution: Use built-in sum or manual iteration
numbers = [1, 2, 3, 4, 5]
total = sum(numbers)
print(total)  # 15`,
      hints: ["sum() function", "Manual: initialize total, loop and add"]
    },

    {
      id: 7,
      title: "Factorial",
      difficulty: "Easy",
      description: "Calculate the factorial of a non-negative integer.",
      starterCode: ``,
      solution: `# Solution: Multiply numbers from 1 to n
n = 5
result = 1
for i in range(1, n + 1):
    result *= i
print(result)  # 120`,
      hints: ["Start result at 1", "Loop from 1 to n", "Multiply each number"]
    },

    {
      id: 8,
      title: "Check Even or Odd",
      difficulty: "Easy",
      description: "Check if a number is even or odd.",
      starterCode: ``,
      solution: `# Solution: Use modulo operator to check remainder
number = 7
if number % 2 == 0:
    print("Even")
else:
    print("Odd")`,
      hints: ["Use modulo operator %", "Even: remainder 0 when divided by 2"]
    },

    {
      id: 9,
      title: "Remove Duplicates",
      difficulty: "Easy",
      description: "Remove duplicates from a list while preserving order.",
      starterCode: ``,
      solution: `# Solution: Use dict.fromkeys() to preserve order
numbers = [1, 2, 2, 3, 4, 4, 5]
unique = list(dict.fromkeys(numbers))
print(unique)  # [1, 2, 3, 4, 5]`,
      hints: ["dict.fromkeys() preserves order", "Alternative: use set (order not guaranteed)"]
    },

    {
      id: 10,
      title: "Find Minimum",
      difficulty: "Easy",
      description: "Find the minimum number in a list without using built-in functions.",
      starterCode: ``,
      solution: `# Solution: Iterate through list and track minimum
numbers = [5, 2, 8, 1, 9]
min_num = numbers[0]
for num in numbers:
    if num < min_num:
        min_num = num
print(min_num)  # 1`,
      hints: ["Initialize with first element", "Loop through list", "Update min when finding smaller"]
    },

    // =========================
    // 🟡 MEDIUM
    // =========================

    {
      id: 11,
      title: "Two Sum",
      difficulty: "Medium",
      description: "Given an array of integers and a target, find two numbers that sum to the target and return their indices.",
      starterCode: ``,
      solution: `# Solution: Use hash map for O(n) time complexity
nums = [2, 7, 11, 15]
target = 9
seen = {}
for i, num in enumerate(nums):
    complement = target - num
    if complement in seen:
        print([seen[complement], i])  # [0, 1]
        break
    seen[num] = i`,
      hints: ["Use dictionary to store visited numbers", "Calculate complement", "One-pass solution"]
    },

    {
      id: 12,
      title: "Anagram Check",
      difficulty: "Medium",
      description: "Check if two strings are anagrams of each other.",
      starterCode: ``,
      solution: `# Solution: Sort both strings or use character count
str1 = "listen"
str2 = "silent"
print(sorted(str1) == sorted(str2))  # True

# Alternative using Counter
from collections import Counter
print(Counter(str1) == Counter(str2))  # True`,
      hints: ["Anagrams have same characters in different order", "Sort both strings", "Use Counter for character count"]
    },

    {
      id: 13,
      title: "Valid Parentheses",
      difficulty: "Medium",
      description: "Check if a string of parentheses is valid (properly opened and closed).",
      starterCode: ``,
      solution: `# Solution: Use stack to track opening parentheses
s = "({[]})"
stack = []
mapping = {')': '(', '}': '{', ']': '['}

for char in s:
    if char in mapping.values():  # Opening bracket
        stack.append(char)
    elif char in mapping.keys():  # Closing bracket
        if not stack or mapping[char] != stack.pop():
            print(False)
            break
else:
    print(not stack)  # True if stack is empty`,
      hints: ["Use stack data structure", "Map closing to opening brackets", "Check stack empty at end"]
    },

    {
      id: 14,
      title: "Fibonacci Sequence",
      difficulty: "Medium",
      description: "Generate the first n numbers of the Fibonacci sequence.",
      starterCode: ``,
      solution: `# Solution: Iterative approach is efficient
n = 10
if n <= 0:
    fib = []
elif n == 1:
    fib = [0]
else:
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[-1] + fib[-2])
print(fib)  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`,
      hints: ["Start with [0, 1]", "Each number is sum of previous two", "Iterative is better than recursive"]
    },

    {
      id: 15,
      title: "First Unique Character",
      difficulty: "Medium",
      description: "Find the first non-repeating character in a string and return its index.",
      starterCode: ``,
      solution: `# Solution: Two-pass approach using dictionary
s = "leetcode"
char_count = {}
for char in s:
    char_count[char] = char_count.get(char, 0) + 1

for i, char in enumerate(s):
    if char_count[char] == 1:
        print(i)  # 0 (l is first unique)
        break
else:
    print(-1)  # No unique character`,
      hints: ["First pass: count characters", "Second pass: find first with count 1", "Use dictionary for O(1) lookups"]
    },

    {
      id: 16,
      title: "Merge Two Sorted Lists",
      difficulty: "Medium",
      description: "Merge two sorted lists into one sorted list.",
      starterCode: ``,
      solution: `# Solution: Two-pointer approach
list1 = [1, 3, 5]
list2 = [2, 4, 6]
merged = []
i = j = 0

while i < len(list1) and j < len(list2):
    if list1[i] < list2[j]:
        merged.append(list1[i])
        i += 1
    else:
        merged.append(list2[j])
        j += 1

merged.extend(list1[i:])
merged.extend(list2[j:])
print(merged)  # [1, 2, 3, 4, 5, 6]`,
      hints: ["Use two pointers", "Compare elements from both lists", "Append remaining elements"]
    },

    {
      id: 17,
      title: "Maximum Subarray",
      difficulty: "Medium",
      description: "Find the contiguous subarray with the largest sum.",
      starterCode: ``,
      solution: `# Solution: Kadane's algorithm (dynamic programming)
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
max_current = max_global = nums[0]

for num in nums[1:]:
    max_current = max(num, max_current + num)
    max_global = max(max_global, max_current)

print(max_global)  # 6 (subarray [4, -1, 2, 1])`,
      hints: ["Kadane's algorithm", "Track current and global maximum", "O(n) time complexity"]
    },

    {
      id: 18,
      title: "Group Anagrams",
      difficulty: "Medium",
      description: "Group anagrams together from a list of strings.",
      starterCode: ``,
      solution: `# Solution: Use sorted string as key in dictionary
strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
anagrams = {}
for s in strs:
    key = ''.join(sorted(s))
    if key not in anagrams:
        anagrams[key] = []
    anagrams[key].append(s)

print(list(anagrams.values()))  # [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]`,
      hints: ["Sorted string as key", "Dictionary to group", "Alternative: use character count tuple as key"]
    },

    {
      id: 19,
      title: "Rotate Array",
      difficulty: "Medium",
      description: "Rotate an array to the right by k steps.",
      starterCode: ``,
      solution: `# Solution: Three-reversal method
nums = [1, 2, 3, 4, 5, 6, 7]
k = 3
k = k % len(nums)  # Handle k larger than array size

def reverse(arr, start, end):
    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1

reverse(nums, 0, len(nums)-1)
reverse(nums, 0, k-1)
reverse(nums, k, len(nums)-1)

print(nums)  # [5, 6, 7, 1, 2, 3, 4]`,
      hints: ["Use three reversals", "Reverse entire array", "Reverse first k elements", "Reverse remaining"]
    },

    {
      id: 20,
      title: "Longest Common Prefix",
      difficulty: "Medium",
      description: "Find the longest common prefix string amongst an array of strings.",
      starterCode: ``,
      solution: `# Solution: Vertical scanning approach
strs = ["flower", "flow", "flight"]
if not strs:
    print("")
    
prefix = strs[0]
for string in strs[1:]:
    while not string.startswith(prefix):
        prefix = prefix[:-1]
        if not prefix:
            print("")
            break
    else:
        continue
    break

print(prefix)  # "fl"`,
      hints: ["Vertical scanning", "Start with first string", "Gradually shorten prefix", "Check startswith()"]
    },

    // =========================
    // 🔴 HARD
    // =========================

    {
      id: 21,
      title: "Trapping Rain Water",
      difficulty: "Hard",
      description: "Compute how much water can be trapped between bars of different heights.",
      starterCode: ``,
      solution: `# Solution: Two-pointer approach
height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
if not height:
    print(0)
    
left, right = 0, len(height) - 1
left_max = right_max = 0
water = 0

while left < right:
    if height[left] < height[right]:
        left_max = max(left_max, height[left])
        water += left_max - height[left]
        left += 1
    else:
        right_max = max(right_max, height[right])
        water += right_max - height[right]
        right -= 1

print(water)  # 6`,
      hints: ["Two-pointer approach", "Track left and right maximums", "Water trapped = min(max_left, max_right) - current_height"]
    },

    {
      id: 22,
      title: "Merge k Sorted Lists",
      difficulty: "Hard",
      description: "Merge k sorted linked lists into one sorted list.",
      starterCode: ``,
      solution: `# Solution: Use heap to efficiently merge multiple lists
import heapq

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def merge_k_lists(lists):
    dummy = ListNode()
    current = dummy
    heap = []
    
    # Initialize heap with first node from each list
    for i, lst in enumerate(lists):
        if lst:
            heapq.heappush(heap, (lst.val, i, lst))
    
    while heap:
        val, i, node = heapq.heappop(heap)
        current.next = node
        current = current.next
        
        if node.next:
            heapq.heappush(heap, (node.next.val, i, node.next))
    
    return dummy.next`,
      hints: ["Use min-heap (priority queue)", "Push first element from each list", "Always push next element after popping"]
    },

    {
      id: 23,
      title: "Median of Two Sorted Arrays",
      difficulty: "Hard",
      description: "Find the median of two sorted arrays.",
      starterCode: ``,
      solution: `# Solution: Binary search on the smaller array
def find_median_sorted_arrays(nums1, nums2):
    # Ensure nums1 is the smaller array
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1
    
    m, n = len(nums1), len(nums2)
    low, high = 0, m
    
    while low <= high:
        partition1 = (low + high) // 2
        partition2 = (m + n + 1) // 2 - partition1
        
        max_left1 = float('-inf') if partition1 == 0 else nums1[partition1 - 1]
        min_right1 = float('inf') if partition1 == m else nums1[partition1]
        
        max_left2 = float('-inf') if partition2 == 0 else nums2[partition2 - 1]
        min_right2 = float('inf') if partition2 == n else nums2[partition2]
        
        if max_left1 <= min_right2 and max_left2 <= min_right1:
            if (m + n) % 2 == 0:
                return (max(max_left1, max_left2) + min(min_right1, min_right2)) / 2
            else:
                return max(max_left1, max_left2)
        elif max_left1 > min_right2:
            high = partition1 - 1
        else:
            low = partition1 + 1
    
    raise ValueError("Input arrays are not sorted")

# Example usage
nums1 = [1, 3]
nums2 = [2]
print(find_median_sorted_arrays(nums1, nums2))  # 2.0`,
      hints: ["Binary search on smaller array", "Partition both arrays", "Check max_left <= min_right", "Handle even/odd total length"]
    },

    {
      id: 24,
      title: "LRU Cache",
      difficulty: "Hard",
      description: "Design and implement an LRU (Least Recently Used) cache.",
      starterCode: ``,
      solution: `# Solution: Use OrderedDict for O(1) operations
from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.cache = OrderedDict()
        self.capacity = capacity
    
    def get(self, key):
        if key not in self.cache:
            return -1
        # Move to end (most recently used)
        self.cache.move_to_end(key)
        return self.cache[key]
    
    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            # Remove first item (least recently used)
            self.cache.popitem(last=False)

# Example usage
cache = LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
print(cache.get(1))  # 1
cache.put(3, 3)      # Evicts key 2
print(cache.get(2))  # -1`,
      hints: ["Use OrderedDict", "move_to_end() for recently used", "popitem(last=False) for eviction", "O(1) for get and put"]
    },

    {
      id: 25,
      title: "Word Search II",
      difficulty: "Hard",
      description: "Given a board of characters and a list of words, find all words in the board.",
      starterCode: ``,
      solution: `# Solution: Trie + Backtracking
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False
        self.word = ""

class Solution:
    def findWords(self, board, words):
        # Build trie
        root = TrieNode()
        for word in words:
            node = root
            for char in word:
                if char not in node.children:
                    node.children[char] = TrieNode()
                node = node.children[char]
            node.is_word = True
            node.word = word
        
        result = []
        rows, cols = len(board), len(board[0])
        
        def dfs(r, c, node):
            if node.is_word:
                result.append(node.word)
                node.is_word = False  # Avoid duplicates
            
            if r < 0 or r >= rows or c < 0 or c >= cols:
                return
            
            char = board[r][c]
            if char not in node.children:
                return
            
            board[r][c] = '#'  # Mark visited
            for dr, dc in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
                dfs(r + dr, c + dc, node.children[char])
            board[r][c] = char  # Restore
        
        for r in range(rows):
            for c in range(cols):
                dfs(r, c, root)
        
        return result

# Example usage
board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
words = ["oath","pea","eat","rain"]
solution = Solution()
print(solution.findWords(board, words))  # ["eat","oath"]`,
      hints: ["Build trie from words", "DFS with backtracking", "Mark visited cells", "Check all four directions"]
    }

  ]
},




javascript: {
  name: "JavaScript",
  icon: jsLogo,
  color: "#f7df1e",
  exercises: [

    // =========================
    // 🟢 EASY
    // =========================

    {
      id: 1,
      title: "FizzBuzz",
      difficulty: "Easy",
      description: "Print numbers from 1 to 100. For multiples of 3, print 'Fizz'. For multiples of 5, print 'Buzz'. For multiples of both, print 'FizzBuzz'.",
      starterCode: ``,
      solution: `// Check conditions in correct order (most restrictive first)
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}`,
      hints: ["Use modulo operator %", "Check FizzBuzz condition first", "Loop from 1 to 100"]
    },

    {
      id: 2,
      title: "Reverse a String",
      difficulty: "Easy",
      description: "Reverse a given string.",
      starterCode: ``,
      solution: `// Multiple solutions for reversing a string
const str = "hello";

// Solution 1: Using split, reverse, join (most common)
const reversed1 = str.split('').reverse().join('');
console.log(reversed1); // "olleh"

// Solution 2: Using a for loop
let reversed2 = '';
for (let i = str.length - 1; i >= 0; i--) {
  reversed2 += str[i];
}
console.log(reversed2); // "olleh"

// Solution 3: Using reduce
const reversed3 = str.split('').reduce((acc, char) => char + acc, '');
console.log(reversed3); // "olleh"`,
      hints: ["String methods: split, reverse, join", "Loop backwards through the string", "Consider multiple approaches"]
    },

    {
      id: 3,
      title: "Find Max/Min in Array",
      difficulty: "Easy",
      description: "Find the maximum and minimum values in an array without using Math.max or Math.min.",
      starterCode: ``,
      solution: `// Manual implementation without built-in methods
const numbers = [3, 7, 2, 9, 4, 1];

let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log("Max:", max); // 9
console.log("Min:", min); // 1

// Alternative with built-in methods (for comparison)
console.log("Built-in Max:", Math.max(...numbers)); // 9
console.log("Built-in Min:", Math.min(...numbers)); // 1`,
      hints: ["Initialize with first element", "Loop through array", "Compare and update values"]
    },

    {
      id: 4,
      title: "Palindrome Check",
      difficulty: "Easy",
      description: "Check if a string is a palindrome (reads the same forwards and backwards).",
      starterCode: ``,
      solution: `// Check palindrome by comparing with reversed string
const isPalindrome = (str) => {
  // Clean the string: remove non-alphanumeric and lowercase
  const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
};

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("racecar")); // true`,
      hints: ["Remove non-alphanumeric characters", "Convert to lowercase", "Compare original with reversed"]
    },

    {
      id: 5,
      title: "Count Vowels",
      difficulty: "Easy",
      description: "Count the number of vowels in a string.",
      starterCode: ``,
      solution: `// Count vowels using regex or loop
const countVowels = (str) => {
  // Solution 1: Using regex
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
  
  // Solution 2: Using loop
  // const vowels = 'aeiouAEIOU';
  // let count = 0;
  // for (let char of str) {
  //   if (vowels.includes(char)) {
  //     count++;
  //   }
  // }
  // return count;
};

console.log(countVowels("Hello World")); // 3
console.log(countVowels("JavaScript")); // 3`,
      hints: ["Define vowel characters", "Case insensitive matching", "Use regex or includes() method"]
    },

    {
      id: 6,
      title: "Factorial",
      difficulty: "Easy",
      description: "Calculate the factorial of a non-negative integer.",
      starterCode: ``,
      solution: `// Calculate factorial using loop (iterative approach)
const factorial = (n) => {
  if (n < 0) return "Undefined";
  if (n === 0 || n === 1) return 1;
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Recursive approach (also common in interviews)
const factorialRecursive = (n) => {
  if (n < 0) return "Undefined";
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1);
};

console.log(factorial(5)); // 120
console.log(factorialRecursive(5)); // 120`,
      hints: ["Handle edge cases (0, 1, negative)", "Loop from 2 to n", "Consider recursive solution"]
    },

    {
      id: 7,
      title: "Remove Duplicates from Array",
      difficulty: "Easy",
      description: "Remove duplicates from an array.",
      starterCode: ``,
      solution: `// Multiple ways to remove duplicates
const array = [1, 2, 2, 3, 4, 4, 5];

// Solution 1: Using Set (most modern)
const unique1 = [...new Set(array)];
console.log(unique1); // [1, 2, 3, 4, 5]

// Solution 2: Using filter
const unique2 = array.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(unique2); // [1, 2, 3, 4, 5]

// Solution 3: Using reduce
const unique3 = array.reduce((acc, current) => {
  if (!acc.includes(current)) {
    acc.push(current);
  }
  return acc;
}, []);
console.log(unique3); // [1, 2, 3, 4, 5]`,
      hints: ["Set automatically removes duplicates", "filter with indexOf", "reduce to accumulate unique values"]
    },

    {
      id: 8,
      title: "Sum of Array Elements",
      difficulty: "Easy",
      description: "Calculate the sum of all elements in an array.",
      starterCode: ``,
      solution: `// Sum array elements using reduce or loop
const numbers = [1, 2, 3, 4, 5];

// Solution 1: Using reduce (functional approach)
const sum1 = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum1); // 15

// Solution 2: Using for loop (imperative approach)
let sum2 = 0;
for (let i = 0; i < numbers.length; i++) {
  sum2 += numbers[i];
}
console.log(sum2); // 15

// Solution 3: Using for...of loop
let sum3 = 0;
for (let num of numbers) {
  sum3 += num;
}
console.log(sum3); // 15`,
      hints: ["reduce method with initial value 0", "Initialize sum variable to 0", "Different loop types"]
    },

    {
      id: 9,
      title: "Check Prime Number",
      difficulty: "Easy",
      description: "Check if a number is prime.",
      starterCode: ``,
      solution: `// Check if a number is prime
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  
  // Check divisibility from 2 to sqrt(num)
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
console.log(isPrime(2)); // true
console.log(isPrime(1)); // false`,
      hints: ["Numbers <= 1 are not prime", "Only check up to sqrt(num)", "Check for divisibility"]
    },

    {
      id: 10,
      title: "Flatten Array",
      difficulty: "Easy",
      description: "Flatten a nested array (one level deep).",
      starterCode: ``,
      solution: `// Flatten nested array
const nestedArray = [1, [2, 3], [4, [5, 6]]];

// Solution 1: Using flat() method (ES2019)
const flat1 = nestedArray.flat();
console.log(flat1); // [1, 2, 3, 4, [5, 6]]

// Solution 2: Using reduce and concat
const flat2 = nestedArray.reduce((acc, current) => {
  return acc.concat(current);
}, []);
console.log(flat2); // [1, 2, 3, 4, [5, 6]]

// Solution 3: Deep flatten (for multiple levels)
const deepFlatten = (arr) => {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? deepFlatten(val) : val);
  }, []);
};
console.log(deepFlatten(nestedArray)); // [1, 2, 3, 4, 5, 6]`,
      hints: ["flat() method for shallow flatten", "reduce with concat", "Recursive function for deep flatten"]
    },

    // =========================
    // 🟡 MEDIUM
    // =========================

    {
      id: 11,
      title: "Two Sum",
      difficulty: "Medium",
      description: "Given an array of integers and a target, find two numbers that sum to the target and return their indices.",
      starterCode: ``,
      solution: `// Classic Two Sum problem
const twoSum = (nums, target) => {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // [0, 1]`,
      hints: ["Use hash map (Map or object)", "Store number and index", "Look for complement in map"]
    },

    {
      id: 12,
      title: "Anagram Check",
      difficulty: "Medium",
      description: "Check if two strings are anagrams of each other.",
      starterCode: ``,
      solution: `// Check if two strings are anagrams
const isAnagram = (str1, str2) => {
  // Clean and sort strings
  const cleanStr1 = str1.replace(/[^a-z]/gi, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-z]/gi, '').toLowerCase();
  
  // Sort characters and compare
  return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
};

// Alternative: Character count method
const isAnagram2 = (str1, str2) => {
  const cleanStr1 = str1.replace(/[^a-z]/gi, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-z]/gi, '').toLowerCase();
  
  if (cleanStr1.length !== cleanStr2.length) return false;
  
  const charCount = {};
  
  for (let char of cleanStr1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  for (let char of cleanStr2) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }
  
  return true;
};

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false`,
      hints: ["Remove non-letters and lowercase", "Sort characters or count them", "Compare lengths first"]
    },

    {
      id: 13,
      title: "Find Missing Number",
      difficulty: "Medium",
      description: "Find the missing number in an array of 1 to n.",
      starterCode: ``,
      solution: `// Find missing number using mathematical formula
const findMissingNumber = (nums, n) => {
  // Calculate expected sum of 1 to n
  const expectedSum = (n * (n + 1)) / 2;
  
  // Calculate actual sum
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  
  // Missing number is the difference
  return expectedSum - actualSum;
};

// Test with array containing numbers 1 to n except one
const nums = [1, 2, 4, 5]; // Missing 3
console.log(findMissingNumber(nums, 5)); // 3`,
      hints: ["Use formula for sum of 1 to n", "Calculate expected vs actual sum", "Difference is missing number"]
    },

    {
      id: 14,
      title: "Merge Two Sorted Arrays",
      difficulty: "Medium",
      description: "Merge two sorted arrays into one sorted array.",
      starterCode: ``,
      solution: `// Merge two sorted arrays
const mergeSortedArrays = (arr1, arr2) => {
  const merged = [];
  let i = 0, j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  
  // Add remaining elements
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  
  return merged;
};

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(mergeSortedArrays(arr1, arr2)); // [1, 2, 3, 4, 5, 6]`,
      hints: ["Use two pointers", "Compare elements from both arrays", "Handle remaining elements"]
    },

    {
      id: 15,
      title: "Find First Non-Repeating Character",
      difficulty: "Medium",
      description: "Find the first non-repeating character in a string.",
      starterCode: ``,
      solution: `// Find first non-repeating character
const firstNonRepeating = (str) => {
  const charCount = {};
  
  // First pass: count characters
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  // Second pass: find first with count 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  
  return null;
};

console.log(firstNonRepeating("swiss")); // "w"
console.log(firstNonRepeating("hello")); // "h"
console.log(firstNonRepeating("aabb")); // null`,
      hints: ["Two-pass approach", "Count characters first", "Return first character with count 1"]
    },

    {
      id: 16,
      title: "Valid Parentheses",
      difficulty: "Medium",
      description: "Check if a string of parentheses is valid (properly opened and closed).",
      starterCode: ``,
      solution: `// Valid parentheses using stack
const isValidParentheses = (s) => {
  const stack = [];
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  
  for (let char of s) {
    // If it's an opening bracket, push to stack
    if (pairs[char]) {
      stack.push(char);
    } 
    // If it's a closing bracket
    else {
      const last = stack.pop();
      if (pairs[last] !== char) {
        return false;
      }
    }
  }
  
  // Stack should be empty if all brackets matched
  return stack.length === 0;
};

console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("([)]")); // false
console.log(isValidParentheses("{[]}")); // true`,
      hints: ["Use stack data structure", "Map opening to closing brackets", "Check stack empty at end"]
    },

    {
      id: 17,
      title: "Fibonacci Sequence (Memoization)",
      difficulty: "Medium",
      description: "Generate Fibonacci numbers with memoization to optimize performance.",
      starterCode: ``,
      solution: `// Fibonacci with memoization (dynamic programming)
const fibonacciMemo = (n, memo = {}) => {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
};

// Iterative approach (more efficient)
const fibonacciIterative = (n) => {
  if (n <= 1) return n;
  
  let prev = 0;
  let current = 1;
  
  for (let i = 2; i <= n; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }
  
  return current;
};

console.log(fibonacciMemo(10)); // 55
console.log(fibonacciIterative(10)); // 55`,
      hints: ["Memoization stores computed values", "Iterative approach avoids recursion limits", "Handle base cases (0, 1)"]
    },

    {
      id: 18,
      title: "Array Chunking",
      difficulty: "Medium",
      description: "Split an array into chunks of specified size.",
      starterCode: ``,
      solution: `// Split array into chunks
const chunkArray = (arr, size) => {
  const chunks = [];
  
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  
  return chunks;
};

// Alternative using while loop
const chunkArray2 = (arr, size) => {
  const chunks = [];
  let index = 0;
  
  while (index < arr.length) {
    chunks.push(arr.slice(index, index + size));
    index += size;
  }
  
  return chunks;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(chunkArray(numbers, 3)); // [[1,2,3], [4,5,6], [7,8]]`,
      hints: ["Use slice method", "Increment index by chunk size", "Handle last chunk that might be smaller"]
    },

    {
      id: 19,
      title: "Find Longest Word",
      difficulty: "Medium",
      description: "Find the longest word in a sentence.",
      starterCode: ``,
      solution: `// Find longest word in sentence
const findLongestWord = (sentence) => {
  // Split into words and remove punctuation
  const words = sentence.split(' ').map(word => 
    word.replace(/[^a-zA-Z]/g, '')
  );
  
  let longestWord = '';
  let maxLength = 0;
  
  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWord = word;
    }
  }
  
  return { word: longestWord, length: maxLength };
};

// Using reduce for functional approach
const findLongestWord2 = (sentence) => {
  const words = sentence.split(' ').map(word => 
    word.replace(/[^a-zA-Z]/g, '')
  );
  
  return words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, '');
};

const sentence = "The quick brown fox jumps over the lazy dog";
console.log(findLongestWord(sentence)); // { word: 'quick', length: 5 }`,
      hints: ["Split sentence into words", "Remove punctuation", "Track longest word and length"]
    },

    {
      id: 20,
      title: "Array Rotation",
      difficulty: "Medium",
      description: "Rotate an array to the right by k positions.",
      starterCode: ``,
      solution: `// Rotate array by k positions
const rotateArray = (arr, k) => {
  // Handle k larger than array length
  k = k % arr.length;
  
  // Solution 1: Using splice and spread
  const rotated = [
    ...arr.slice(-k), // Last k elements
    ...arr.slice(0, -k) // All except last k elements
  ];
  
  return rotated;
};

// Alternative: Manual rotation
const rotateArrayManual = (arr, k) => {
  k = k % arr.length;
  const rotated = [];
  
  for (let i = 0; i < arr.length; i++) {
    // Calculate new position
    const newIndex = (i + k) % arr.length;
    rotated[newIndex] = arr[i];
  }
  
  return rotated;
};

const numbers = [1, 2, 3, 4, 5];
console.log(rotateArray(numbers, 2)); // [4, 5, 1, 2, 3]`,
      hints: ["Handle k > array length", "Use slice method", "Calculate new positions with modulo"]
    },

    // =========================
    // 🔴 HARD
    // =========================

    {
      id: 21,
      title: "Debounce Function",
      difficulty: "Hard",
      description: "Implement a debounce function that delays execution until after wait time has elapsed.",
      starterCode: ``,
      solution: `// Debounce implementation
const debounce = (func, wait) => {
  let timeoutId;
  
  return function(...args) {
    // Clear previous timeout
    clearTimeout(timeoutId);
    
    // Set new timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};

// Throttle implementation (often asked together)
const throttle = (func, limit) => {
  let inThrottle;
  
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Example usage
const handleResize = () => {
  console.log('Window resized');
};

const debouncedResize = debounce(handleResize, 300);
window.addEventListener('resize', debouncedResize);`,
      hints: ["Use setTimeout", "Clear previous timeout", "Return function with closure", "Use apply for context"]
    },

    {
      id: 22,
      title: "Deep Clone Object",
      difficulty: "Hard",
      description: "Create a deep clone of an object (nested objects and arrays).",
      starterCode: ``,
      solution: `// Deep clone implementation
const deepClone = (obj) => {
  // Handle primitive types and null
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  // Handle arrays
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  
  // Handle dates
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  
  // Handle regular objects
  const clonedObj = {};
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  
  return clonedObj;
};

// Using JSON methods (simpler but has limitations)
const deepCloneJSON = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

// Example usage
const original = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA"
  },
  hobbies: ["reading", "coding"]
};

const cloned = deepClone(original);
console.log(cloned);
console.log(original !== cloned); // true (different references)
console.log(original.address !== cloned.address); // true (nested also cloned)`,
      hints: ["Handle different data types", "Recursive approach for nested objects", "Check for own properties"]
    },

    {
      id: 23,
      title: "Promise Implementation",
      difficulty: "Hard",
      description: "Implement a simple Promise class from scratch.",
      starterCode: ``,
      solution: `// Simple Promise implementation
class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    
    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach(callback => callback(value));
      }
    };
    
    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(callback => callback(reason));
      }
    };
    
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  
  then(onFulfilled, onRejected) {
    if (this.state === 'fulfilled') {
      onFulfilled(this.value);
    } else if (this.state === 'rejected') {
      onRejected(this.reason);
    } else {
      this.onFulfilledCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
    }
    
    return this; // For chaining (simplified)
  }
  
  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

// Example usage
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

promise.then(result => {
  console.log(result); // "Success!" after 1 second
});`,
      hints: ["Three states: pending, fulfilled, rejected", "Store callbacks in arrays", "Executor runs immediately"]
    },

    {
      id: 24,
      title: "Currying Function",
      difficulty: "Hard",
      description: "Implement a curry function that transforms a function into a curried version.",
      starterCode: ``,
      solution: `// Currying implementation
const curry = (fn, arity = fn.length) => {
  return function curried(...args) {
    if (args.length >= arity) {
      return fn.apply(this, args);
    } else {
      return function(...moreArgs) {
        return curried.apply(this, args.concat(moreArgs));
      };
    }
  };
};

// Example usage
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6

// Partial application (related concept)
const partial = (fn, ...fixedArgs) => {
  return function(...remainingArgs) {
    return fn.apply(this, [...fixedArgs, ...remainingArgs]);
  };
};

const add5 = partial(add, 5);
console.log(add5(2, 3)); // 10 (5 + 2 + 3)`,
      hints: ["Track arity (number of parameters)", "Return function until all arguments collected", "Use apply for context"]
    },

    {
      id: 25,
      title: "Event Emitter",
      difficulty: "Hard",
      description: "Implement an EventEmitter class with on, emit, and off methods.",
      starterCode: ``,
      solution: `// EventEmitter implementation
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  // Subscribe to event
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
    
    // Return unsubscribe function
    return () => this.off(event, listener);
  }
  
  // Emit event with data
  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(listener => {
        listener(...args);
      });
    }
  }
  
  // Remove listener
  off(event, listenerToRemove) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(
        listener => listener !== listenerToRemove
      );
    }
  }
  
  // Subscribe once
  once(event, listener) {
    const onceListener = (...args) => {
      listener(...args);
      this.off(event, onceListener);
    };
    this.on(event, onceListener);
  }
}

// Example usage
const emitter = new EventEmitter();

// Subscribe
const unsubscribe = emitter.on('data', (data) => {
  console.log('Received:', data);
});

// Emit
emitter.emit('data', 'Hello World'); // Logs: Received: Hello World

// Unsubscribe
unsubscribe();
emitter.emit('data', 'This wont be received');

// Once
emitter.once('greeting', (name) => {
  console.log('Hello', name);
});

emitter.emit('greeting', 'John'); // Logs: Hello John
emitter.emit('greeting', 'Jane'); // No output (only once)`,
      hints: ["Store events in object", "Array of listeners per event", "Return unsubscribe function", "Filter to remove listener"]
    }

  ]
},



java: {
  name: "Java",
  icon: javaLogo,
  color: "#007396",
  exercises: [

    // =========================
    // 🟢 EASY
    // =========================

    {
      id: 1,
      title: "Reverse String",
      difficulty: "Easy",
      description: "Reverse a string without using StringBuilder.reverse().",
      starterCode: `public class Main {
    public static String reverse(String str) {
        // Your code here
        return "";
    }
    
    public static void main(String[] args) {
        System.out.println(reverse("Hello")); // olleH
        System.out.println(reverse("Java"));  // avaJ
    }
}`,
      solution: `// Solution using two pointers technique
public class Main {
    public static String reverse(String str) {
        char[] chars = str.toCharArray();
        int left = 0, right = chars.length - 1;
        
        while (left < right) {
            char temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;
            left++;
            right--;
        }
        
        return new String(chars);
    }
    
    public static void main(String[] args) {
        System.out.println(reverse("Hello")); // olleH
        System.out.println(reverse("Java"));  // avaJ
    }
}`,
      hints: ["Convert string to char array", "Use two pointers", "Swap characters from both ends"]
    },

    {
      id: 2,
      title: "Find Maximum in Array",
      difficulty: "Easy",
      description: "Find the maximum value in an array of integers.",
      starterCode: `public class Main {
    public static int findMax(int[] arr) {
        // Your code here
        return 0;
    }
    
    public static void main(String[] args) {
        int[] arr = {5, 3, 9, 1, 7};
        System.out.println(findMax(arr)); // 9
    }
}`,
      solution: `// Simple iterative approach
public class Main {
    public static int findMax(int[] arr) {
        if (arr == null || arr.length == 0) {
            throw new IllegalArgumentException("Array cannot be empty");
        }
        
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    
    public static void main(String[] args) {
        int[] arr = {5, 3, 9, 1, 7};
        System.out.println(findMax(arr)); // 9
    }
}`,
      hints: ["Initialize max with first element", "Loop through array", "Update max when finding larger value"]
    },

    {
      id: 3,
      title: "Check Palindrome",
      difficulty: "Easy",
      description: "Check if a string is a palindrome.",
      starterCode: `public class Main {
    public static boolean isPalindrome(String str) {
        // Your code here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("racecar")); // true
        System.out.println(isPalindrome("hello"));   // false
        System.out.println(isPalindrome("A man a plan a canal Panama")); // true
    }
}`,
      solution: `// Check palindrome by comparing characters from both ends
public class Main {
    public static boolean isPalindrome(String str) {
        String cleanStr = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        int left = 0, right = cleanStr.length() - 1;
        
        while (left < right) {
            if (cleanStr.charAt(left) != cleanStr.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("racecar")); // true
        System.out.println(isPalindrome("hello"));   // false
        System.out.println(isPalindrome("A man a plan a canal Panama")); // true
    }
}`,
      hints: ["Remove non-alphanumeric characters", "Convert to lowercase", "Compare characters from both ends"]
    },

    {
      id: 4,
      title: "Count Vowels",
      difficulty: "Easy",
      description: "Count the number of vowels in a string.",
      starterCode: `public class Main {
    public static int countVowels(String str) {
        // Your code here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(countVowels("Hello World")); // 3
        System.out.println(countVowels("Java Programming")); // 5
    }
}`,
      solution: `// Count vowels using enhanced for loop
public class Main {
    public static int countVowels(String str) {
        int count = 0;
        String vowels = "aeiouAEIOU";
        
        for (char c : str.toCharArray()) {
            if (vowels.indexOf(c) != -1) {
                count++;
            }
        }
        return count;
    }
    
    // Alternative using regex
    public static int countVowelsRegex(String str) {
        return str.replaceAll("[^aeiouAEIOU]", "").length();
    }
    
    public static void main(String[] args) {
        System.out.println(countVowels("Hello World")); // 3
        System.out.println(countVowels("Java Programming")); // 5
    }
}`,
      hints: ["Define string with all vowels", "Check each character", "Case insensitive counting"]
    },

    {
      id: 5,
      title: "Factorial Calculation",
      difficulty: "Easy",
      description: "Calculate the factorial of a non-negative integer.",
      starterCode: `public class Main {
    public static int factorial(int n) {
        // Your code here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(factorial(5)); // 120
        System.out.println(factorial(0)); // 1
    }
}`,
      solution: `// Iterative factorial calculation
public class Main {
    public static int factorial(int n) {
        if (n < 0) {
            throw new IllegalArgumentException("Factorial not defined for negative numbers");
        }
        
        int result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
    // Recursive version (also common in interviews)
    public static int factorialRecursive(int n) {
        if (n < 0) throw new IllegalArgumentException("Negative number");
        if (n <= 1) return 1;
        return n * factorialRecursive(n - 1);
    }
    
    public static void main(String[] args) {
        System.out.println(factorial(5)); // 120
        System.out.println(factorial(0)); // 1
    }
}`,
      hints: ["Handle edge cases (0, 1, negative)", "Start result from 1", "Multiply sequentially"]
    },

    {
      id: 6,
      title: "Sum of Array",
      difficulty: "Easy",
      description: "Calculate the sum of all elements in an array.",
      starterCode: `public class Main {
    public static int sumArray(int[] arr) {
        // Your code here
        return 0;
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println(sumArray(arr)); // 15
    }
}`,
      solution: `// Sum array elements using enhanced for loop
public class Main {
    public static int sumArray(int[] arr) {
        int sum = 0;
        for (int num : arr) {
            sum += num;
        }
        return sum;
    }
    
    // Using traditional for loop
    public static int sumArrayTraditional(int[] arr) {
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println(sumArray(arr)); // 15
    }
}`,
      hints: ["Initialize sum to 0", "Add each element to sum", "Use enhanced for loop for simplicity"]
    },

    {
      id: 7,
      title: "Find Duplicates",
      difficulty: "Easy",
      description: "Find all duplicate elements in an array.",
      starterCode: `import java.util.*;

public class Main {
    public static List<Integer> findDuplicates(int[] arr) {
        // Your code here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 2, 1, 4, 5, 4};
        System.out.println(findDuplicates(arr)); // [1, 2, 4]
    }
}`,
      solution: `// Find duplicates using HashSet
import java.util.*;

public class Main {
    public static List<Integer> findDuplicates(int[] arr) {
        Set<Integer> seen = new HashSet<>();
        Set<Integer> duplicates = new LinkedHashSet<>();
        
        for (int num : arr) {
            if (!seen.add(num)) {
                duplicates.add(num);
            }
        }
        return new ArrayList<>(duplicates);
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 2, 1, 4, 5, 4};
        System.out.println(findDuplicates(arr)); // [1, 2, 4]
    }
}`,
      hints: ["HashSet.add() returns false if element exists", "Use two sets", "Maintain insertion order if needed"]
    },

    {
      id: 8,
      title: "Check Prime Number",
      difficulty: "Easy",
      description: "Check if a number is prime.",
      starterCode: `public class Main {
    public static boolean isPrime(int n) {
        // Your code here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPrime(7));  // true
        System.out.println(isPrime(10)); // false
        System.out.println(isPrime(2));  // true
    }
}`,
      solution: `// Efficient prime checking
public class Main {
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;
        
        // Check divisibility up to sqrt(n)
        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) {
                return false;
            }
        }
        return true;
    }
    
    public static void main(String[] args) {
        System.out.println(isPrime(7));  // true
        System.out.println(isPrime(10)); // false
        System.out.println(isPrime(2));  // true
    }
}`,
      hints: ["Numbers <= 1 are not prime", "Check divisibility by 2 and 3 first", "Only check up to sqrt(n)"]
    },

    {
      id: 9,
      title: "Remove Duplicates from Array",
      difficulty: "Easy",
      description: "Remove duplicates from an array while preserving order.",
      starterCode: `import java.util.*;

public class Main {
    public static int[] removeDuplicates(int[] arr) {
        // Your code here
        return new int[0];
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 3, 4, 4, 5};
        System.out.println(Arrays.toString(removeDuplicates(arr))); // [1, 2, 3, 4, 5]
    }
}`,
      solution: `// Remove duplicates using LinkedHashSet to preserve order
import java.util.*;

public class Main {
    public static int[] removeDuplicates(int[] arr) {
        Set<Integer> set = new LinkedHashSet<>();
        for (int num : arr) {
            set.add(num);
        }
        
        // Convert back to array
        int[] result = new int[set.size()];
        int index = 0;
        for (int num : set) {
            result[index++] = num;
        }
        return result;
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 3, 4, 4, 5};
        System.out.println(Arrays.toString(removeDuplicates(arr))); // [1, 2, 3, 4, 5]
    }
}`,
      hints: ["Use LinkedHashSet to preserve order", "Add all elements to set", "Convert set back to array"]
    },

    {
      id: 10,
      title: "Fibonacci Sequence",
      difficulty: "Easy",
      description: "Generate the first n numbers of the Fibonacci sequence.",
      starterCode: `import java.util.Arrays;

public class Main {
    public static int[] fibonacci(int n) {
        // Your code here
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(fibonacci(10)));
        // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    }
}`,
      solution: `// Generate Fibonacci sequence iteratively
import java.util.Arrays;

public class Main {
    public static int[] fibonacci(int n) {
        if (n <= 0) return new int[0];
        if (n == 1) return new int[]{0};
        
        int[] result = new int[n];
        result[0] = 0;
        result[1] = 1;
        
        for (int i = 2; i < n; i++) {
            result[i] = result[i-1] + result[i-2];
        }
        return result;
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(fibonacci(10)));
        // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    }
}`,
      hints: ["Handle base cases (0, 1)", "Initialize first two numbers", "Each number is sum of previous two"]
    },

    // =========================
    // 🟡 MEDIUM
    // =========================

    {
      id: 11,
      title: "Valid Parentheses",
      difficulty: "Medium",
      description: "Check if a string containing parentheses, brackets, and braces is valid.",
      starterCode: `import java.util.*;

public class Main {
    public static boolean isValid(String s) {
        // Your code here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isValid("()"));     // true
        System.out.println(isValid("()[]{}")); // true
        System.out.println(isValid("(]"));     // false
        System.out.println(isValid("([)]"));   // false
    }
}`,
      solution: `// Classic stack problem for matching parentheses
import java.util.*;

public class Main {
    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        Map<Character, Character> pairs = new HashMap<>();
        pairs.put(')', '(');
        pairs.put(']', '[');
        pairs.put('}', '{');
        
        for (char c : s.toCharArray()) {
            if (pairs.containsValue(c)) {
                stack.push(c);
            } else if (pairs.containsKey(c)) {
                if (stack.isEmpty() || stack.pop() != pairs.get(c)) {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }
    
    public static void main(String[] args) {
        System.out.println(isValid("()"));     // true
        System.out.println(isValid("()[]{}")); // true
        System.out.println(isValid("(]"));     // false
        System.out.println(isValid("([)]"));   // false
    }
}`,
      hints: ["Use Stack data structure", "Map closing to opening brackets", "Check if stack is empty at end"]
    },

    {
      id: 12,
      title: "Two Sum",
      difficulty: "Medium",
      description: "Given an array of integers and a target, find two numbers that sum to target and return their indices.",
      starterCode: `import java.util.*;

public class Main {
    public static int[] twoSum(int[] nums, int target) {
        // Your code here
        return new int[0];
    }
    
    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        System.out.println(Arrays.toString(twoSum(nums, target))); // [0, 1]
    }
}`,
      solution: `// Two Sum using HashMap for O(n) time complexity
import java.util.*;

public class Main {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        return new int[]{};
    }
    
    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        System.out.println(Arrays.toString(twoSum(nums, target))); // [0, 1]
    }
}`,
      hints: ["Use HashMap to store numbers and indices", "Look for complement", "One-pass solution"]
    },

    {
      id: 13,
      title: "Merge Two Sorted Arrays",
      difficulty: "Medium",
      description: "Merge two sorted arrays into one sorted array.",
      starterCode: `import java.util.Arrays;

public class Main {
    public static int[] mergeSortedArrays(int[] arr1, int[] arr2) {
        // Your code here
        return new int[0];
    }
    
    public static void main(String[] args) {
        int[] arr1 = {1, 3, 5};
        int[] arr2 = {2, 4, 6};
        System.out.println(Arrays.toString(mergeSortedArrays(arr1, arr2))); // [1, 2, 3, 4, 5, 6]
    }
}`,
      solution: `// Merge two sorted arrays using two pointers
import java.util.Arrays;

public class Main {
    public static int[] mergeSortedArrays(int[] arr1, int[] arr2) {
        int[] result = new int[arr1.length + arr2.length];
        int i = 0, j = 0, k = 0;
        
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                result[k++] = arr1[i++];
            } else {
                result[k++] = arr2[j++];
            }
        }
        
        while (i < arr1.length) result[k++] = arr1[i++];
        while (j < arr2.length) result[k++] = arr2[j++];
        
        return result;
    }
    
    public static void main(String[] args) {
        int[] arr1 = {1, 3, 5};
        int[] arr2 = {2, 4, 6};
        System.out.println(Arrays.toString(mergeSortedArrays(arr1, arr2))); // [1, 2, 3, 4, 5, 6]
    }
}`,
      hints: ["Use three pointers", "Compare elements from both arrays", "Handle remaining elements"]
    },

    {
      id: 14,
      title: "Anagram Check",
      difficulty: "Medium",
      description: "Check if two strings are anagrams of each other.",
      starterCode: `import java.util.*;

public class Main {
    public static boolean areAnagrams(String str1, String str2) {
        // Your code here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(areAnagrams("listen", "silent")); // true
        System.out.println(areAnagrams("hello", "world"));   // false
    }
}`,
      solution: `// Check anagrams using character count
import java.util.*;

public class Main {
    public static boolean areAnagrams(String str1, String str2) {
        if (str1.length() != str2.length()) return false;
        
        char[] chars1 = str1.toCharArray();
        char[] chars2 = str2.toCharArray();
        Arrays.sort(chars1);
        Arrays.sort(chars2);
        
        return Arrays.equals(chars1, chars2);
    }
    
    // Alternative using frequency map
    public static boolean areAnagramsMap(String str1, String str2) {
        if (str1.length() != str2.length()) return false;
        
        Map<Character, Integer> freq = new HashMap<>();
        for (char c : str1.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        
        for (char c : str2.toCharArray()) {
            if (!freq.containsKey(c) || freq.get(c) == 0) {
                return false;
            }
            freq.put(c, freq.get(c) - 1);
        }
        return true;
    }
    
    public static void main(String[] args) {
        System.out.println(areAnagrams("listen", "silent")); // true
        System.out.println(areAnagrams("hello", "world"));   // false
    }
}`,
      hints: ["Check lengths first", "Sort both strings and compare", "Use HashMap for character counting"]
    },

    {
      id: 15,
      title: "Find Missing Number",
      difficulty: "Medium",
      description: "Find the missing number in an array containing numbers from 1 to n.",
      starterCode: `public class Main {
    public static int findMissingNumber(int[] arr, int n) {
        // Your code here
        return 0;
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 5}; // Missing 3
        System.out.println(findMissingNumber(arr, 5)); // 3
    }
}`,
      solution: `// Find missing number using mathematical formula
public class Main {
    public static int findMissingNumber(int[] arr, int n) {
        // Calculate expected sum of 1 to n
        int expectedSum = n * (n + 1) / 2;
        
        // Calculate actual sum
        int actualSum = 0;
        for (int num : arr) {
            actualSum += num;
        }
        
        // Missing number is the difference
        return expectedSum - actualSum;
    }
    
    // Alternative using XOR (no overflow risk)
    public static int findMissingNumberXOR(int[] arr, int n) {
        int xor1 = 0, xor2 = 0;
        
        for (int i = 1; i <= n; i++) {
            xor1 ^= i;
        }
        
        for (int num : arr) {
            xor2 ^= num;
        }
        
        return xor1 ^ xor2;
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 5}; // Missing 3
        System.out.println(findMissingNumber(arr, 5)); // 3
    }
}`,
      hints: ["Use formula for sum of 1 to n", "Calculate expected vs actual sum", "XOR approach avoids overflow"]
    },

    {
      id: 16,
      title: "Singleton Pattern",
      difficulty: "Medium",
      description: "Implement the Singleton design pattern thread-safe.",
      starterCode: `public class Singleton {
    // Your code here
    
    public void showMessage() {
        System.out.println("Singleton instance!");
    }
}

public class Main {
    public static void main(String[] args) {
        Singleton obj1 = Singleton.getInstance();
        Singleton obj2 = Singleton.getInstance();
        System.out.println(obj1 == obj2); // true
    }
}`,
      solution: `// Thread-safe Singleton with double-checked locking
public class Singleton {
    private static volatile Singleton instance;
    
    private Singleton() {
        // Private constructor to prevent instantiation
    }
    
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
    
    public void showMessage() {
        System.out.println("Singleton instance!");
    }
}

public class Main {
    public static void main(String[] args) {
        Singleton obj1 = Singleton.getInstance();
        Singleton obj2 = Singleton.getInstance();
        System.out.println(obj1 == obj2); // true
    }
}`,
      hints: ["Private constructor", "volatile keyword for thread safety", "Double-checked locking"]
    },

    {
      id: 17,
      title: "Binary Search",
      difficulty: "Medium",
      description: "Implement binary search algorithm on a sorted array.",
      starterCode: `public class Main {
    public static int binarySearch(int[] arr, int target) {
        // Your code here
        return -1;
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9, 11};
        System.out.println(binarySearch(arr, 7));  // 3
        System.out.println(binarySearch(arr, 12)); // -1
    }
}`,
      solution: `// Classic binary search implementation
public class Main {
    public static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
    
    // Recursive version
    public static int binarySearchRecursive(int[] arr, int target, int left, int right) {
        if (left > right) return -1;
        
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, right);
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
    
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9, 11};
        System.out.println(binarySearch(arr, 7));  // 3
        System.out.println(binarySearch(arr, 12)); // -1
    }
}`,
      hints: ["Array must be sorted", "Calculate mid without overflow", "Adjust left/right pointers"]
    },

    {
      id: 18,
      title: "Bubble Sort",
      difficulty: "Medium",
      description: "Implement bubble sort algorithm.",
      starterCode: `import java.util.Arrays;

public class Main {
    public static void bubbleSort(int[] arr) {
        // Your code here
    }
    
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(arr);
        System.out.println(Arrays.toString(arr));
        // [11, 12, 22, 25, 34, 64, 90]
    }
}`,
      solution: `// Bubble sort implementation with optimization
import java.util.Arrays;

public class Main {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        boolean swapped;
        
        for (int i = 0; i < n - 1; i++) {
            swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            // If no swapping occurred, array is sorted
            if (!swapped) break;
        }
    }
    
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(arr);
        System.out.println(Arrays.toString(arr));
    }
}`,
      hints: ["Outer loop for passes", "Inner loop for comparisons", "Swap adjacent elements if in wrong order"]
    },

    {
      id: 19,
      title: "Find First Non-Repeating Character",
      difficulty: "Medium",
      description: "Find the first non-repeating character in a string.",
      starterCode: `import java.util.*;

public class Main {
    public static Character firstNonRepeating(String str) {
        // Your code here
        return null;
    }
    
    public static void main(String[] args) {
        System.out.println(firstNonRepeating("swiss")); // w
        System.out.println(firstNonRepeating("hello")); // h
        System.out.println(firstNonRepeating("aabb"));  // null
    }
}`,
      solution: `// Find first non-repeating character using LinkedHashMap
import java.util.*;

public class Main {
    public static Character firstNonRepeating(String str) {
        Map<Character, Integer> freq = new LinkedHashMap<>();
        
        // Count frequency
        for (char c : str.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }
        
        // Find first character with frequency 1
        for (Map.Entry<Character, Integer> entry : freq.entrySet()) {
            if (entry.getValue() == 1) {
                return entry.getKey();
            }
        }
        return null;
    }
    
    public static void main(String[] args) {
        System.out.println(firstNonRepeating("swiss")); // w
        System.out.println(firstNonRepeating("hello")); // h
        System.out.println(firstNonRepeating("aabb"));  // null
    }
}`,
      hints: ["Use LinkedHashMap to preserve insertion order", "Two-pass approach", "Count frequency first"]
    },

    {
      id: 20,
      title: "Implement Queue using Stack",
      difficulty: "Medium",
      description: "Implement a queue data structure using two stacks.",
      starterCode: `import java.util.Stack;

class MyQueue {
    // Your code here
    
    public void enqueue(int x) {
    }
    
    public int dequeue() {
        return 0;
    }
    
    public boolean isEmpty() {
        return false;
    }
}

public class Main {
    public static void main(String[] args) {
        MyQueue queue = new MyQueue();
        queue.enqueue(1);
        queue.enqueue(2);
        System.out.println(queue.dequeue()); // 1
        System.out.println(queue.dequeue()); // 2
    }
}`,
      solution: `// Queue implementation using two stacks
import java.util.Stack;

class MyQueue {
    private Stack<Integer> stack1; // For enqueue
    private Stack<Integer> stack2; // For dequeue
    
    public MyQueue() {
        stack1 = new Stack<>();
        stack2 = new Stack<>();
    }
    
    public void enqueue(int x) {
        stack1.push(x);
    }
    
    public int dequeue() {
        if (isEmpty()) {
            throw new RuntimeException("Queue is empty");
        }
        
        if (stack2.isEmpty()) {
            // Move all elements from stack1 to stack2
            while (!stack1.isEmpty()) {
                stack2.push(stack1.pop());
            }
        }
        return stack2.pop();
    }
    
    public boolean isEmpty() {
        return stack1.isEmpty() && stack2.isEmpty();
    }
}

public class Main {
    public static void main(String[] args) {
        MyQueue queue = new MyQueue();
        queue.enqueue(1);
        queue.enqueue(2);
        System.out.println(queue.dequeue()); // 1
        System.out.println(queue.dequeue()); // 2
    }
}`,
      hints: ["Use two stacks", "Push to stack1 for enqueue", "Pop from stack2 for dequeue", "Transfer when stack2 empty"]
    },

    // =========================
    // 🔴 HARD
    // =========================

    {
      id: 21,
      title: "LRU Cache",
      difficulty: "Hard",
      description: "Design and implement an LRU (Least Recently Used) cache.",
      starterCode: `import java.util.*;

class LRUCache {
    // Your code here
    
    public LRUCache(int capacity) {
    }
    
    public int get(int key) {
        return -1;
    }
    
    public void put(int key, int value) {
    }
}

public class Main {
    public static void main(String[] args) {
        LRUCache cache = new LRUCache(2);
        cache.put(1, 1);
        cache.put(2, 2);
        System.out.println(cache.get(1)); // 1
        cache.put(3, 3); // Evicts key 2
        System.out.println(cache.get(2)); // -1
    }
}`,
      solution: `// LRU Cache implementation using LinkedHashMap
import java.util.*;

class LRUCache {
    private LinkedHashMap<Integer, Integer> cache;
    private final int capacity;
    
    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.cache = new LinkedHashMap<>(capacity, 0.75f, true) {
            @Override
            protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {
                return size() > capacity;
            }
        };
    }
    
    public int get(int key) {
        return cache.getOrDefault(key, -1);
    }
    
    public void put(int key, int value) {
        cache.put(key, value);
    }
}

// Alternative manual implementation with HashMap and Doubly Linked List
class LRUCacheManual {
    class Node {
        int key, value;
        Node prev, next;
        Node(int key, int value) {
            this.key = key;
            this.value = value;
        }
    }
    
    private Map<Integer, Node> map;
    private Node head, tail;
    private int capacity;
    
    public LRUCacheManual(int capacity) {
        this.capacity = capacity;
        map = new HashMap<>();
        head = new Node(0, 0);
        tail = new Node(0, 0);
        head.next = tail;
        tail.prev = head;
    }
    
    private void addToFront(Node node) {
        node.next = head.next;
        node.prev = head;
        head.next.prev = node;
        head.next = node;
    }
    
    private void removeNode(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    
    public int get(int key) {
        if (!map.containsKey(key)) return -1;
        Node node = map.get(key);
        removeNode(node);
        addToFront(node);
        return node.value;
    }
    
    public void put(int key, int value) {
        if (map.containsKey(key)) {
            Node node = map.get(key);
            node.value = value;
            removeNode(node);
            addToFront(node);
        } else {
            if (map.size() == capacity) {
                Node lru = tail.prev;
                removeNode(lru);
                map.remove(lru.key);
            }
            Node newNode = new Node(key, value);
            map.put(key, newNode);
            addToFront(newNode);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        LRUCache cache = new LRUCache(2);
        cache.put(1, 1);
        cache.put(2, 2);
        System.out.println(cache.get(1)); // 1
        cache.put(3, 3); // Evicts key 2
        System.out.println(cache.get(2)); // -1
    }
}`,
      hints: ["Use LinkedHashMap with access order", "Override removeEldestEntry", "For manual: HashMap + Doubly Linked List"]
    },

    {
      id: 22,
      title: "Merge Sort",
      difficulty: "Hard",
      description: "Implement the merge sort algorithm.",
      starterCode: `import java.util.Arrays;

public class Main {
    public static void mergeSort(int[] arr) {
        // Your code here
    }
    
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        mergeSort(arr);
        System.out.println(Arrays.toString(arr));
        // [11, 12, 22, 25, 34, 64, 90]
    }
}`,
      solution: `// Merge sort implementation (divide and conquer)
import java.util.Arrays;

public class Main {
    public static void mergeSort(int[] arr) {
        if (arr.length < 2) return;
        
        int mid = arr.length / 2;
        int[] left = Arrays.copyOfRange(arr, 0, mid);
        int[] right = Arrays.copyOfRange(arr, mid, arr.length);
        
        mergeSort(left);
        mergeSort(right);
        merge(arr, left, right);
    }
    
    private static void merge(int[] arr, int[] left, int[] right) {
        int i = 0, j = 0, k = 0;
        
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
            }
        }
        
        while (i < left.length) arr[k++] = left[i++];
        while (j < right.length) arr[k++] = right[j++];
    }
    
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        mergeSort(arr);
        System.out.println(Arrays.toString(arr));
    }
}`,
      hints: ["Divide array into halves", "Recursively sort halves", "Merge sorted halves"]
    },

    {
      id: 23,
      title: "Producer-Consumer Problem",
      difficulty: "Hard",
      description: "Implement the producer-consumer pattern using threads.",
      starterCode: `import java.util.concurrent.*;

class SharedBuffer {
    // Your code here
}

class Producer implements Runnable {
    // Your code here
}

class Consumer implements Runnable {
    // Your code here
}

public class Main {
    public static void main(String[] args) {
        // Test your implementation
    }
}`,
      solution: `// Producer-Consumer using BlockingQueue (simplest)
import java.util.concurrent.*;

class SharedBuffer {
    private BlockingQueue<Integer> queue;
    private final int capacity;
    
    public SharedBuffer(int capacity) {
        this.capacity = capacity;
        this.queue = new LinkedBlockingQueue<>(capacity);
    }
    
    public void produce(int item) throws InterruptedException {
        queue.put(item);
        System.out.println("Produced: " + item);
    }
    
    public int consume() throws InterruptedException {
        int item = queue.take();
        System.out.println("Consumed: " + item);
        return item;
    }
}

class Producer implements Runnable {
    private SharedBuffer buffer;
    
    public Producer(SharedBuffer buffer) {
        this.buffer = buffer;
    }
    
    @Override
    public void run() {
        try {
            for (int i = 1; i <= 10; i++) {
                buffer.produce(i);
                Thread.sleep(100); // Simulate work
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}

class Consumer implements Runnable {
    private SharedBuffer buffer;
    
    public Consumer(SharedBuffer buffer) {
        this.buffer = buffer;
    }
    
    @Override
    public void run() {
        try {
            for (int i = 1; i <= 10; i++) {
                buffer.consume();
                Thread.sleep(150); // Simulate work
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}

public class Main {
    public static void main(String[] args) {
        SharedBuffer buffer = new SharedBuffer(5);
        
        Thread producerThread = new Thread(new Producer(buffer));
        Thread consumerThread = new Thread(new Consumer(buffer));
        
        producerThread.start();
        consumerThread.start();
        
        try {
            producerThread.join();
            consumerThread.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        System.out.println("Producer-Consumer completed.");
    }
}`,
      hints: ["Use BlockingQueue for simplicity", "put() blocks when queue is full", "take() blocks when queue is empty"]
    },

    {
      id: 24,
      title: "Implement HashMap",
      difficulty: "Hard",
      description: "Implement a simple HashMap from scratch.",
      starterCode: `class MyHashMap<K, V> {
    // Your code here
    
    public void put(K key, V value) {
    }
    
    public V get(K key) {
        return null;
    }
    
    public void remove(K key) {
    }
    
    public boolean containsKey(K key) {
        return false;
    }
}

public class Main {
    public static void main(String[] args) {
        MyHashMap<String, Integer> map = new MyHashMap<>();
        map.put("one", 1);
        map.put("two", 2);
        System.out.println(map.get("one")); // 1
        map.remove("one");
        System.out.println(map.containsKey("one")); // false
    }
}`,
      solution: `// Simple HashMap implementation using array of linked lists
class MyHashMap<K, V> {
    private static class Entry<K, V> {
        K key;
        V value;
        Entry<K, V> next;
        
        Entry(K key, V value) {
            this.key = key;
            this.value = value;
        }
    }
    
    private Entry<K, V>[] buckets;
    private int capacity;
    private int size;
    
    @SuppressWarnings("unchecked")
    public MyHashMap() {
        this.capacity = 16; // Initial capacity
        this.buckets = new Entry[capacity];
        this.size = 0;
    }
    
    private int hash(K key) {
        return key == null ? 0 : Math.abs(key.hashCode() % capacity);
    }
    
    public void put(K key, V value) {
        int index = hash(key);
        Entry<K, V> current = buckets[index];
        
        // Check if key already exists
        while (current != null) {
            if ((key == null && current.key == null) || 
                (key != null && key.equals(current.key))) {
                current.value = value; // Update existing
                return;
            }
            current = current.next;
        }
        
        // Add new entry at beginning of bucket
        Entry<K, V> newEntry = new Entry<>(key, value);
        newEntry.next = buckets[index];
        buckets[index] = newEntry;
        size++;
        
        // Resize if needed (simplified)
        if (size > capacity * 0.75) {
            resize();
        }
    }
    
    public V get(K key) {
        int index = hash(key);
        Entry<K, V> current = buckets[index];
        
        while (current != null) {
            if ((key == null && current.key == null) || 
                (key != null && key.equals(current.key))) {
                return current.value;
            }
            current = current.next;
        }
        return null;
    }
    
    public void remove(K key) {
        int index = hash(key);
        Entry<K, V> current = buckets[index];
        Entry<K, V> prev = null;
        
        while (current != null) {
            if ((key == null && current.key == null) || 
                (key != null && key.equals(current.key))) {
                if (prev == null) {
                    buckets[index] = current.next;
                } else {
                    prev.next = current.next;
                }
                size--;
                return;
            }
            prev = current;
            current = current.next;
        }
    }
    
    public boolean containsKey(K key) {
        return get(key) != null;
    }
    
    @SuppressWarnings("unchecked")
    private void resize() {
        capacity *= 2;
        Entry<K, V>[] oldBuckets = buckets;
        buckets = new Entry[capacity];
        size = 0;
        
        for (Entry<K, V> head : oldBuckets) {
            Entry<K, V> current = head;
            while (current != null) {
                put(current.key, current.value);
                current = current.next;
            }
        }
    }
}

public class Main {
    public static void main(String[] args) {
        MyHashMap<String, Integer> map = new MyHashMap<>();
        map.put("one", 1);
        map.put("two", 2);
        System.out.println(map.get("one")); // 1
        map.remove("one");
        System.out.println(map.containsKey("one")); // false
    }
}`,
      hints: ["Array of linked lists (buckets)", "Hash function to determine bucket", "Handle collisions with chaining"]
    },

    {
      id: 25,
      title: "Serialize and Deserialize Binary Tree",
      difficulty: "Hard",
      description: "Serialize a binary tree to string and deserialize it back.",
      starterCode: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

public class Main {
    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        return "";
    }
    
    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        return null;
    }
    
    public static void main(String[] args) {
        // Test your implementation
    }
}`,
      solution: `// Serialize and deserialize binary tree using preorder traversal
import java.util.*;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

public class Main {
    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        StringBuilder sb = new StringBuilder();
        serializeHelper(root, sb);
        return sb.toString();
    }
    
    private void serializeHelper(TreeNode node, StringBuilder sb) {
        if (node == null) {
            sb.append("null,");
            return;
        }
        sb.append(node.val).append(",");
        serializeHelper(node.left, sb);
        serializeHelper(node.right, sb);
    }
    
    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        Queue<String> nodes = new LinkedList<>(Arrays.asList(data.split(",")));
        return deserializeHelper(nodes);
    }
    
    private TreeNode deserializeHelper(Queue<String> nodes) {
        String val = nodes.poll();
        if (val.equals("null")) {
            return null;
        }
        TreeNode node = new TreeNode(Integer.parseInt(val));
        node.left = deserializeHelper(nodes);
        node.right = deserializeHelper(nodes);
        return node;
    }
    
    public static void main(String[] args) {
        Main codec = new Main();
        
        // Create a sample tree
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.right.left = new TreeNode(4);
        root.right.right = new TreeNode(5);
        
        // Test serialization and deserialization
        String serialized = codec.serialize(root);
        System.out.println("Serialized: " + serialized);
        
        TreeNode deserialized = codec.deserialize(serialized);
        String reserialized = codec.serialize(deserialized);
        System.out.println("Reserialized: " + reserialized);
        System.out.println("Match: " + serialized.equals(reserialized)); // true
    }
}`,
      hints: ["Use preorder traversal", "Represent null nodes with marker", "Use queue for deserialization"]
    }

  ]
}, 




csharp: {
  name: "C#",
  icon: csharpLogo,
  color: "#68217a",
  exercises: [

    // =========================
    // 🟢 EASY
    // =========================

    {
      id: 1,
      title: "Reverse String",
      difficulty: "Easy",
      description: "Reverse a string without using Array.Reverse().",
      starterCode: `using System;

class Program
{
    static string ReverseString(string input)
    {
        // Your code here
        return "";
    }

    static void Main()
    {
        Console.WriteLine(ReverseString("hello")); // "olleh"
        Console.WriteLine(ReverseString("C#"));    // "#C"
    }
}`,
      solution: `// Solution using char array and two pointers
using System;

class Program
{
    static string ReverseString(string input)
    {
        if (string.IsNullOrEmpty(input))
            return input;
        
        char[] chars = input.ToCharArray();
        int left = 0;
        int right = chars.Length - 1;
        
        while (left < right)
        {
            char temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;
            left++;
            right--;
        }
        
        return new string(chars);
    }

    static void Main()
    {
        Console.WriteLine(ReverseString("hello")); // "olleh"
        Console.WriteLine(ReverseString("C#"));    // "#C"
    }
}`,
      hints: ["Convert string to char array", "Use two pointers approach", "Swap characters from both ends"]
    },

    {
      id: 2,
      title: "Find Maximum in Array",
      difficulty: "Easy",
      description: "Find the maximum value in an integer array.",
      starterCode: `using System;

class Program
{
    static int FindMax(int[] numbers)
    {
        // Your code here
        return 0;
    }

    static void Main()
    {
        int[] numbers = { 5, 3, 9, 1, 7 };
        Console.WriteLine(FindMax(numbers)); // 9
    }
}`,
      solution: `// Iterative approach to find maximum
using System;

class Program
{
    static int FindMax(int[] numbers)
    {
        if (numbers == null || numbers.Length == 0)
            throw new ArgumentException("Array cannot be null or empty");
        
        int max = numbers[0];
        for (int i = 1; i < numbers.Length; i++)
        {
            if (numbers[i] > max)
                max = numbers[i];
        }
        return max;
    }

    static void Main()
    {
        int[] numbers = { 5, 3, 9, 1, 7 };
        Console.WriteLine(FindMax(numbers)); // 9
    }
}`,
      hints: ["Initialize with first element", "Loop through array", "Update max when finding larger value"]
    },

    {
      id: 3,
      title: "Check Palindrome",
      difficulty: "Easy",
      description: "Check if a string is a palindrome (reads the same forwards and backwards).",
      starterCode: `using System;
using System.Text.RegularExpressions;

class Program
{
    static bool IsPalindrome(string input)
    {
        // Your code here
        return false;
    }

    static void Main()
    {
        Console.WriteLine(IsPalindrome("racecar")); // true
        Console.WriteLine(IsPalindrome("hello"));   // false
        Console.WriteLine(IsPalindrome("A man a plan a canal Panama")); // true
    }
}`,
      solution: `// Check palindrome by comparing characters from both ends
using System;
using System.Text.RegularExpressions;

class Program
{
    static bool IsPalindrome(string input)
    {
        // Remove non-alphanumeric characters and convert to lowercase
        string cleanInput = Regex.Replace(input, @"[^a-zA-Z0-9]", "").ToLower();
        
        int left = 0;
        int right = cleanInput.Length - 1;
        
        while (left < right)
        {
            if (cleanInput[left] != cleanInput[right])
                return false;
            left++;
            right--;
        }
        return true;
    }

    static void Main()
    {
        Console.WriteLine(IsPalindrome("racecar")); // true
        Console.WriteLine(IsPalindrome("hello"));   // false
        Console.WriteLine(IsPalindrome("A man a plan a canal Panama")); // true
    }
}`,
      hints: ["Remove non-alphanumeric characters", "Convert to lowercase", "Compare characters from both ends"]
    },

    {
      id: 4,
      title: "Count Vowels",
      difficulty: "Easy",
      description: "Count the number of vowels in a string.",
      starterCode: `using System;

class Program
{
    static int CountVowels(string input)
    {
        // Your code here
        return 0;
    }

    static void Main()
    {
        Console.WriteLine(CountVowels("Hello World")); // 3
        Console.WriteLine(CountVowels("C# Programming")); // 4
    }
}`,
      solution: `// Count vowels using LINQ or loop
using System;
using System.Linq;

class Program
{
    static int CountVowels(string input)
    {
        if (string.IsNullOrEmpty(input))
            return 0;
        
        char[] vowels = { 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' };
        return input.Count(c => vowels.Contains(c));
    }
    
    // Alternative using foreach loop
    static int CountVowelsLoop(string input)
    {
        if (string.IsNullOrEmpty(input))
            return 0;
        
        char[] vowels = { 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' };
        int count = 0;
        foreach (char c in input)
        {
            if (Array.IndexOf(vowels, c) != -1)
                count++;
        }
        return count;
    }

    static void Main()
    {
        Console.WriteLine(CountVowels("Hello World")); // 3
        Console.WriteLine(CountVowels("C# Programming")); // 4
    }
}`,
      hints: ["Define array of vowels", "Use LINQ Count method", "Case insensitive counting"]
    },

    {
      id: 5,
      title: "Factorial Calculation",
      difficulty: "Easy",
      description: "Calculate the factorial of a non-negative integer.",
      starterCode: `using System;

class Program
{
    static int Factorial(int n)
    {
        // Your code here
        return 0;
    }

    static void Main()
    {
        Console.WriteLine(Factorial(5)); // 120
        Console.WriteLine(Factorial(0)); // 1
    }
}`,
      solution: `// Iterative factorial calculation
using System;

class Program
{
    static int Factorial(int n)
    {
        if (n < 0)
            throw new ArgumentException("Factorial not defined for negative numbers");
        
        if (n == 0 || n == 1)
            return 1;
        
        int result = 1;
        for (int i = 2; i <= n; i++)
        {
            result *= i;
        }
        return result;
    }
    
    // Recursive version
    static int FactorialRecursive(int n)
    {
        if (n < 0)
            throw new ArgumentException("Negative number");
        if (n <= 1)
            return 1;
        return n * FactorialRecursive(n - 1);
    }

    static void Main()
    {
        Console.WriteLine(Factorial(5)); // 120
        Console.WriteLine(Factorial(0)); // 1
    }
}`,
      hints: ["Handle edge cases (0, 1, negative)", "Start result from 1", "Multiply sequentially"]
    },

    {
      id: 6,
      title: "Sum of Array Elements",
      difficulty: "Easy",
      description: "Calculate the sum of all elements in an integer array.",
      starterCode: `using System;

class Program
{
    static int SumArray(int[] numbers)
    {
        // Your code here
        return 0;
    }

    static void Main()
    {
        int[] numbers = { 1, 2, 3, 4, 5 };
        Console.WriteLine(SumArray(numbers)); // 15
    }
}`,
      solution: `// Sum array elements using loop
using System;
using System.Linq;

class Program
{
    static int SumArray(int[] numbers)
    {
        if (numbers == null)
            throw new ArgumentNullException(nameof(numbers));
        
        int sum = 0;
        foreach (int num in numbers)
        {
            sum += num;
        }
        return sum;
    }
    
    // Alternative using LINQ
    static int SumArrayLinq(int[] numbers)
    {
        return numbers?.Sum() ?? 0;
    }

    static void Main()
    {
        int[] numbers = { 1, 2, 3, 4, 5 };
        Console.WriteLine(SumArray(numbers)); // 15
    }
}`,
      hints: ["Initialize sum to 0", "Use foreach loop", "Check for null array"]
    },

    {
      id: 7,
      title: "Find Duplicates",
      difficulty: "Easy",
      description: "Find all duplicate elements in an array.",
      starterCode: `using System;
using System.Collections.Generic;

class Program
{
    static List<int> FindDuplicates(int[] numbers)
    {
        // Your code here
        return new List<int>();
    }

    static void Main()
    {
        int[] numbers = { 1, 2, 3, 2, 1, 4, 5, 4 };
        var duplicates = FindDuplicates(numbers);
        Console.WriteLine(string.Join(", ", duplicates)); // 1, 2, 4
    }
}`,
      solution: `// Find duplicates using HashSet
using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static List<int> FindDuplicates(int[] numbers)
    {
        if (numbers == null || numbers.Length == 0)
            return new List<int>();
        
        HashSet<int> seen = new HashSet<int>();
        HashSet<int> duplicates = new HashSet<int>();
        
        foreach (int num in numbers)
        {
            if (!seen.Add(num))
            {
                duplicates.Add(num);
            }
        }
        
        return duplicates.ToList();
    }
    
    // Alternative using LINQ
    static List<int> FindDuplicatesLinq(int[] numbers)
    {
        return numbers?.GroupBy(x => x)
                      .Where(g => g.Count() > 1)
                      .Select(g => g.Key)
                      .ToList() ?? new List<int>();
    }

    static void Main()
    {
        int[] numbers = { 1, 2, 3, 2, 1, 4, 5, 4 };
        var duplicates = FindDuplicates(numbers);
        Console.WriteLine(string.Join(", ", duplicates)); // 1, 2, 4
    }
}`,
      hints: ["Use two HashSets", "HashSet.Add returns false if element exists", "Group by element with LINQ"]
    },

    {
      id: 8,
      title: "Check Prime Number",
      difficulty: "Easy",
      description: "Check if a number is prime.",
      starterCode: `using System;

class Program
{
    static bool IsPrime(int n)
    {
        // Your code here
        return false;
    }

    static void Main()
    {
        Console.WriteLine(IsPrime(7));  // true
        Console.WriteLine(IsPrime(10)); // false
        Console.WriteLine(IsPrime(2));  // true
    }
}`,
      solution: `// Efficient prime checking
using System;

class Program
{
    static bool IsPrime(int n)
    {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;
        
        // Check divisibility up to sqrt(n)
        for (int i = 5; i * i <= n; i += 6)
        {
            if (n % i == 0 || n % (i + 2) == 0)
                return false;
        }
        return true;
    }

    static void Main()
    {
        Console.WriteLine(IsPrime(7));  // true
        Console.WriteLine(IsPrime(10)); // false
        Console.WriteLine(IsPrime(2));  // true
    }
}`,
      hints: ["Numbers <= 1 are not prime", "Check divisibility by 2 and 3 first", "Only check up to sqrt(n)"]
    },

    {
      id: 9,
      title: "Remove Duplicates from Array",
      difficulty: "Easy",
      description: "Remove duplicates from an array while preserving order.",
      starterCode: `using System;
using System.Collections.Generic;

class Program
{
    static int[] RemoveDuplicates(int[] numbers)
    {
        // Your code here
        return new int[0];
    }

    static void Main()
    {
        int[] numbers = { 1, 2, 2, 3, 4, 4, 5 };
        var result = RemoveDuplicates(numbers);
        Console.WriteLine(string.Join(", ", result)); // 1, 2, 3, 4, 5
    }
}`,
      solution: `// Remove duplicates using HashSet
using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static int[] RemoveDuplicates(int[] numbers)
    {
        if (numbers == null || numbers.Length == 0)
            return Array.Empty<int>();
        
        HashSet<int> seen = new HashSet<int>();
        List<int> result = new List<int>();
        
        foreach (int num in numbers)
        {
            if (seen.Add(num))
            {
                result.Add(num);
            }
        }
        
        return result.ToArray();
    }
    
    // Alternative using LINQ and Distinct
    static int[] RemoveDuplicatesLinq(int[] numbers)
    {
        return numbers?.Distinct().ToArray() ?? Array.Empty<int>();
    }

    static void Main()
    {
        int[] numbers = { 1, 2, 2, 3, 4, 4, 5 };
        var result = RemoveDuplicates(numbers);
        Console.WriteLine(string.Join(", ", result)); // 1, 2, 3, 4, 5
    }
}`,
      hints: ["Use HashSet to track seen elements", "Add to result only if new", "LINQ Distinct() for simple solution"]
    },

    {
      id: 10,
      title: "Fibonacci Sequence",
      difficulty: "Easy",
      description: "Generate the first n numbers of the Fibonacci sequence.",
      starterCode: `using System;

class Program
{
    static int[] Fibonacci(int n)
    {
        // Your code here
        return new int[0];
    }

    static void Main()
    {
        var result = Fibonacci(10);
        Console.WriteLine(string.Join(", ", result)); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
    }
}`,
      solution: `// Generate Fibonacci sequence iteratively
using System;

class Program
{
    static int[] Fibonacci(int n)
    {
        if (n <= 0)
            return Array.Empty<int>();
        
        if (n == 1)
            return new int[] { 0 };
        
        int[] result = new int[n];
        result[0] = 0;
        result[1] = 1;
        
        for (int i = 2; i < n; i++)
        {
            result[i] = result[i - 1] + result[i - 2];
        }
        
        return result;
    }

    static void Main()
    {
        var result = Fibonacci(10);
        Console.WriteLine(string.Join(", ", result)); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
    }
}`,
      hints: ["Handle base cases (0, 1)", "Initialize first two numbers", "Each number is sum of previous two"]
    },

    // =========================
    // 🟡 MEDIUM
    // =========================

    {
      id: 11,
      title: "Valid Parentheses",
      difficulty: "Medium",
      description: "Check if a string containing parentheses, brackets, and braces is valid.",
      starterCode: `using System;
using System.Collections.Generic;

class Program
{
    static bool IsValid(string s)
    {
        // Your code here
        return false;
    }

    static void Main()
    {
        Console.WriteLine(IsValid("()"));     // true
        Console.WriteLine(IsValid("()[]{}")); // true
        Console.WriteLine(IsValid("(]"));     // false
        Console.WriteLine(IsValid("([)]"));   // false
    }
}`,
      solution: `// Classic stack problem for matching parentheses
using System;
using System.Collections.Generic;

class Program
{
    static bool IsValid(string s)
    {
        if (string.IsNullOrEmpty(s))
            return true;
        
        Stack<char> stack = new Stack<char>();
        Dictionary<char, char> pairs = new Dictionary<char, char>
        {
            { ')', '(' },
            { ']', '[' },
            { '}', '{' }
        };
        
        foreach (char c in s)
        {
            // If it's an opening bracket, push to stack
            if (c == '(' || c == '[' || c == '{')
            {
                stack.Push(c);
            }
            // If it's a closing bracket
            else if (pairs.ContainsKey(c))
            {
                if (stack.Count == 0 || stack.Pop() != pairs[c])
                    return false;
            }
        }
        
        return stack.Count == 0;
    }

    static void Main()
    {
        Console.WriteLine(IsValid("()"));     // true
        Console.WriteLine(IsValid("()[]{}")); // true
        Console.WriteLine(IsValid("(]"));     // false
        Console.WriteLine(IsValid("([)]"));   // false
    }
}`,
      hints: ["Use Stack<char> data structure", "Map closing to opening brackets", "Check if stack is empty at end"]
    },

    {
      id: 12,
      title: "Two Sum",
      difficulty: "Medium",
      description: "Given an array of integers and a target, find two numbers that sum to target and return their indices.",
      starterCode: `using System;
using System.Collections.Generic;

class Program
{
    static int[] TwoSum(int[] nums, int target)
    {
        // Your code here
        return new int[0];
    }

    static void Main()
    {
        int[] nums = { 2, 7, 11, 15 };
        int target = 9;
        var result = TwoSum(nums, target);
        Console.WriteLine($"[{result[0]}, {result[1]}]"); // [0, 1]
    }
}`,
      solution: `// Two Sum using Dictionary for O(n) time complexity
using System;
using System.Collections.Generic;

class Program
{
    static int[] TwoSum(int[] nums, int target)
    {
        if (nums == null || nums.Length < 2)
            return Array.Empty<int>();
        
        Dictionary<int, int> map = new Dictionary<int, int>();
        
        for (int i = 0; i < nums.Length; i++)
        {
            int complement = target - nums[i];
            
            if (map.TryGetValue(complement, out int index))
            {
                return new int[] { index, i };
            }
            
            map[nums[i]] = i;
        }
        
        return Array.Empty<int>();
    }

    static void Main()
    {
        int[] nums = { 2, 7, 11, 15 };
        int target = 9;
        var result = TwoSum(nums, target);
        Console.WriteLine($"[{result[0]}, {result[1]}]"); // [0, 1]
    }
}`,
      hints: ["Use Dictionary to store numbers and indices", "Look for complement", "One-pass solution"]
    },

    {
      id: 13,
      title: "Merge Two Sorted Arrays",
      difficulty: "Medium",
      description: "Merge two sorted arrays into one sorted array.",
      starterCode: `using System;

class Program
{
    static int[] MergeSortedArrays(int[] arr1, int[] arr2)
    {
        // Your code here
        return new int[0];
    }

    static void Main()
    {
        int[] arr1 = { 1, 3, 5 };
        int[] arr2 = { 2, 4, 6 };
        var result = MergeSortedArrays(arr1, arr2);
        Console.WriteLine(string.Join(", ", result)); // 1, 2, 3, 4, 5, 6
    }
}`,
      solution: `// Merge two sorted arrays using three pointers
using System;

class Program
{
    static int[] MergeSortedArrays(int[] arr1, int[] arr2)
    {
        if (arr1 == null) return arr2 ?? Array.Empty<int>();
        if (arr2 == null) return arr1 ?? Array.Empty<int>();
        
        int[] result = new int[arr1.Length + arr2.Length];
        int i = 0, j = 0, k = 0;
        
        while (i < arr1.Length && j < arr2.Length)
        {
            if (arr1[i] < arr2[j])
            {
                result[k++] = arr1[i++];
            }
            else
            {
                result[k++] = arr2[j++];
            }
        }
        
        // Copy remaining elements
        while (i < arr1.Length) result[k++] = arr1[i++];
        while (j < arr2.Length) result[k++] = arr2[j++];
        
        return result;
    }

    static void Main()
    {
        int[] arr1 = { 1, 3, 5 };
        int[] arr2 = { 2, 4, 6 };
        var result = MergeSortedArrays(arr1, arr2);
        Console.WriteLine(string.Join(", ", result)); // 1, 2, 3, 4, 5, 6
    }
}`,
      hints: ["Use three pointers", "Compare elements from both arrays", "Handle remaining elements"]
    },

    {
      id: 14,
      title: "Anagram Check",
      difficulty: "Medium",
      description: "Check if two strings are anagrams of each other.",
      starterCode: `using System;

class Program
{
    static bool AreAnagrams(string str1, string str2)
    {
        // Your code here
        return false;
    }

    static void Main()
    {
        Console.WriteLine(AreAnagrams("listen", "silent")); // true
        Console.WriteLine(AreAnagrams("hello", "world"));   // false
    }
}`,
      solution: `// Check anagrams using character frequency
using System;
using System.Linq;

class Program
{
    static bool AreAnagrams(string str1, string str2)
    {
        if (str1 == null || str2 == null)
            return false;
        
        if (str1.Length != str2.Length)
            return false;
        
        // Sort and compare
        char[] chars1 = str1.ToLower().ToCharArray();
        char[] chars2 = str2.ToLower().ToCharArray();
        Array.Sort(chars1);
        Array.Sort(chars2);
        
        return chars1.SequenceEqual(chars2);
    }
    
    // Alternative using character count
    static bool AreAnagramsCount(string str1, string str2)
    {
        if (str1 == null || str2 == null || str1.Length != str2.Length)
            return false;
        
        int[] count = new int[256]; // Assuming ASCII
        
        foreach (char c in str1.ToLower())
            count[c]++;
        
        foreach (char c in str2.ToLower())
        {
            if (--count[c] < 0)
                return false;
        }
        
        return true;
    }

    static void Main()
    {
        Console.WriteLine(AreAnagrams("listen", "silent")); // true
        Console.WriteLine(AreAnagrams("hello", "world"));   // false
    }
}`,
      hints: ["Check lengths first", "Sort both strings and compare", "Use character frequency array"]
    },

    {
      id: 15,
      title: "Find Missing Number",
      difficulty: "Medium",
      description: "Find the missing number in an array containing numbers from 1 to n.",
      starterCode: `using System;

class Program
{
    static int FindMissingNumber(int[] numbers, int n)
    {
        // Your code here
        return 0;
    }

    static void Main()
    {
        int[] numbers = { 1, 2, 4, 5 }; // Missing 3
        Console.WriteLine(FindMissingNumber(numbers, 5)); // 3
    }
}`,
      solution: `// Find missing number using mathematical formula
using System;
using System.Linq;

class Program
{
    static int FindMissingNumber(int[] numbers, int n)
    {
        if (numbers == null || numbers.Length == 0)
            return 1;
        
        // Calculate expected sum of 1 to n
        int expectedSum = n * (n + 1) / 2;
        
        // Calculate actual sum
        int actualSum = numbers.Sum();
        
        // Missing number is the difference
        return expectedSum - actualSum;
    }
    
    // Alternative using XOR
    static int FindMissingNumberXor(int[] numbers, int n)
    {
        int xor1 = 0;
        for (int i = 1; i <= n; i++)
            xor1 ^= i;
        
        int xor2 = 0;
        foreach (int num in numbers)
            xor2 ^= num;
        
        return xor1 ^ xor2;
    }

    static void Main()
    {
        int[] numbers = { 1, 2, 4, 5 }; // Missing 3
        Console.WriteLine(FindMissingNumber(numbers, 5)); // 3
    }
}`,
      hints: ["Use formula for sum of 1 to n", "Calculate expected vs actual sum", "XOR approach avoids overflow"]
    },

    {
      id: 16,
      title: "Singleton Pattern",
      difficulty: "Medium",
      description: "Implement the Singleton design pattern thread-safe.",
      starterCode: `using System;

public class Singleton
{
    // Your code here
    
    public void ShowMessage()
    {
        Console.WriteLine("Singleton instance!");
    }
}

class Program
{
    static void Main()
    {
        Singleton obj1 = Singleton.Instance;
        Singleton obj2 = Singleton.Instance;
        Console.WriteLine(obj1 == obj2); // true
    }
}`,
      solution: `// Thread-safe Singleton using Lazy<T>
using System;

public sealed class Singleton
{
    private static readonly Lazy<Singleton> lazy = 
        new Lazy<Singleton>(() => new Singleton());
    
    public static Singleton Instance => lazy.Value;
    
    private Singleton()
    {
        // Private constructor
    }
    
    public void ShowMessage()
    {
        Console.WriteLine("Singleton instance!");
    }
}

// Alternative using lock (for older .NET versions)
public sealed class SingletonLock
{
    private static SingletonLock instance = null;
    private static readonly object lockObject = new object();
    
    public static SingletonLock Instance
    {
        get
        {
            if (instance == null)
            {
                lock (lockObject)
                {
                    if (instance == null)
                    {
                        instance = new SingletonLock();
                    }
                }
            }
            return instance;
        }
    }
    
    private SingletonLock() { }
}

class Program
{
    static void Main()
    {
        Singleton obj1 = Singleton.Instance;
        Singleton obj2 = Singleton.Instance;
        Console.WriteLine(obj1 == obj2); // true
    }
}`,
      hints: ["Use Lazy<T> for thread safety", "Private constructor", "Sealed class to prevent inheritance"]
    },

    {
      id: 17,
      title: "Binary Search",
      difficulty: "Medium",
      description: "Implement binary search algorithm on a sorted array.",
      starterCode: `using System;

class Program
{
    static int BinarySearch(int[] arr, int target)
    {
        // Your code here
        return -1;
    }

    static void Main()
    {
        int[] arr = { 1, 3, 5, 7, 9, 11 };
        Console.WriteLine(BinarySearch(arr, 7));  // 3
        Console.WriteLine(BinarySearch(arr, 12)); // -1
    }
}`,
      solution: `// Classic binary search implementation
using System;

class Program
{
    static int BinarySearch(int[] arr, int target)
    {
        if (arr == null || arr.Length == 0)
            return -1;
        
        int left = 0;
        int right = arr.Length - 1;
        
        while (left <= right)
        {
            int mid = left + (right - left) / 2; // Avoid overflow
            
            if (arr[mid] == target)
                return mid;
            else if (arr[mid] < target)
                left = mid + 1;
            else
                right = mid - 1;
        }
        
        return -1;
    }
    
    // Recursive version
    static int BinarySearchRecursive(int[] arr, int target, int left, int right)
    {
        if (left > right)
            return -1;
        
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target)
            return mid;
        else if (arr[mid] < target)
            return BinarySearchRecursive(arr, target, mid + 1, right);
        else
            return BinarySearchRecursive(arr, target, left, mid - 1);
    }

    static void Main()
    {
        int[] arr = { 1, 3, 5, 7, 9, 11 };
        Console.WriteLine(BinarySearch(arr, 7));  // 3
        Console.WriteLine(BinarySearch(arr, 12)); // -1
    }
}`,
      hints: ["Array must be sorted", "Calculate mid without overflow", "Adjust left/right pointers"]
    },

    {
      id: 18,
      title: "Bubble Sort",
      difficulty: "Medium",
      description: "Implement bubble sort algorithm.",
      starterCode: `using System;

class Program
{
    static void BubbleSort(int[] arr)
    {
        // Your code here
    }

    static void Main()
    {
        int[] arr = { 64, 34, 25, 12, 22, 11, 90 };
        BubbleSort(arr);
        Console.WriteLine(string.Join(", ", arr)); // 11, 12, 22, 25, 34, 64, 90
    }
}`,
      solution: `// Bubble sort implementation with optimization
using System;

class Program
{
    static void BubbleSort(int[] arr)
    {
        if (arr == null || arr.Length <= 1)
            return;
        
        int n = arr.Length;
        bool swapped;
        
        for (int i = 0; i < n - 1; i++)
        {
            swapped = false;
            for (int j = 0; j < n - i - 1; j++)
            {
                if (arr[j] > arr[j + 1])
                {
                    // Swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            
            // If no swapping occurred, array is sorted
            if (!swapped)
                break;
        }
    }

    static void Main()
    {
        int[] arr = { 64, 34, 25, 12, 22, 11, 90 };
        BubbleSort(arr);
        Console.WriteLine(string.Join(", ", arr)); // 11, 12, 22, 25, 34, 64, 90
    }
}`,
      hints: ["Outer loop for passes", "Inner loop for comparisons", "Swap adjacent elements if in wrong order"]
    },

    {
      id: 19,
      title: "Find First Non-Repeating Character",
      difficulty: "Medium",
      description: "Find the first non-repeating character in a string.",
      starterCode: `using System;
using System.Collections.Generic;

class Program
{
    static char? FirstNonRepeating(string input)
    {
        // Your code here
        return null;
    }

    static void Main()
    {
        Console.WriteLine(FirstNonRepeating("swiss")); // w
        Console.WriteLine(FirstNonRepeating("hello")); // h
        Console.WriteLine(FirstNonRepeating("aabb"));  // null
    }
}`,
      solution: `// Find first non-repeating character using Dictionary
using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static char? FirstNonRepeating(string input)
    {
        if (string.IsNullOrEmpty(input))
            return null;
        
        Dictionary<char, int> frequency = new Dictionary<char, int>();
        
        // Count frequency of each character
        foreach (char c in input)
        {
            if (frequency.ContainsKey(c))
                frequency[c]++;
            else
                frequency[c] = 1;
        }
        
        // Find first character with frequency 1
        foreach (char c in input)
        {
            if (frequency[c] == 1)
                return c;
        }
        
        return null;
    }
    
    // Alternative using LINQ
    static char? FirstNonRepeatingLinq(string input)
    {
        return input?.GroupBy(c => c)
                    .FirstOrDefault(g => g.Count() == 1)?
                    .Key;
    }

    static void Main()
    {
        Console.WriteLine(FirstNonRepeating("swiss")); // w
        Console.WriteLine(FirstNonRepeating("hello")); // h
        Console.WriteLine(FirstNonRepeating("aabb"));  // null
    }
}`,
      hints: ["Count frequency of each character", "Two-pass approach", "Use Dictionary for O(1) lookups"]
    },

    {
      id: 20,
      title: "Implement Queue using Stack",
      difficulty: "Medium",
      description: "Implement a queue data structure using two stacks.",
      starterCode: `using System;
using System.Collections.Generic;

public class QueueUsingStack
{
    // Your code here
    
    public void Enqueue(int item)
    {
    }
    
    public int Dequeue()
    {
        return 0;
    }
    
    public bool IsEmpty()
    {
        return false;
    }
}

class Program
{
    static void Main()
    {
        QueueUsingStack queue = new QueueUsingStack();
        queue.Enqueue(1);
        queue.Enqueue(2);
        Console.WriteLine(queue.Dequeue()); // 1
        Console.WriteLine(queue.Dequeue()); // 2
    }
}`,
      solution: `// Queue implementation using two stacks
using System;
using System.Collections.Generic;

public class QueueUsingStack
{
    private Stack<int> stack1; // For enqueue
    private Stack<int> stack2; // For dequeue
    
    public QueueUsingStack()
    {
        stack1 = new Stack<int>();
        stack2 = new Stack<int>();
    }
    
    public void Enqueue(int item)
    {
        stack1.Push(item);
    }
    
    public int Dequeue()
    {
        if (IsEmpty())
            throw new InvalidOperationException("Queue is empty");
        
        if (stack2.Count == 0)
        {
            // Move all elements from stack1 to stack2
            while (stack1.Count > 0)
            {
                stack2.Push(stack1.Pop());
            }
        }
        
        return stack2.Pop();
    }
    
    public bool IsEmpty()
    {
        return stack1.Count == 0 && stack2.Count == 0;
    }
    
    public int Peek()
    {
        if (IsEmpty())
            throw new InvalidOperationException("Queue is empty");
        
        if (stack2.Count == 0)
        {
            while (stack1.Count > 0)
            {
                stack2.Push(stack1.Pop());
            }
        }
        
        return stack2.Peek();
    }
}

class Program
{
    static void Main()
    {
        QueueUsingStack queue = new QueueUsingStack();
        queue.Enqueue(1);
        queue.Enqueue(2);
        Console.WriteLine(queue.Dequeue()); // 1
        Console.WriteLine(queue.Dequeue()); // 2
    }
}`,
      hints: ["Use two stacks", "Push to stack1 for enqueue", "Pop from stack2 for dequeue", "Transfer when stack2 empty"]
    },

    // =========================
    // 🔴 HARD
    // =========================

    {
      id: 21,
      title: "LRU Cache",
      difficulty: "Hard",
      description: "Design and implement an LRU (Least Recently Used) cache.",
      starterCode: `using System;
using System.Collections.Generic;

public class LRUCache
{
    // Your code here
    
    public LRUCache(int capacity)
    {
    }
    
    public int Get(int key)
    {
        return -1;
    }
    
    public void Put(int key, int value)
    {
    }
}

class Program
{
    static void Main()
    {
        LRUCache cache = new LRUCache(2);
        cache.Put(1, 1);
        cache.Put(2, 2);
        Console.WriteLine(cache.Get(1)); // 1
        cache.Put(3, 3); // Evicts key 2
        Console.WriteLine(cache.Get(2)); // -1
    }
}`,
      solution: `// LRU Cache implementation using Dictionary and LinkedList
using System;
using System.Collections.Generic;

public class LRUCache
{
    private class Node
    {
        public int Key { get; set; }
        public int Value { get; set; }
        public Node Previous { get; set; }
        public Node Next { get; set; }
        
        public Node(int key, int value)
        {
            Key = key;
            Value = value;
        }
    }
    
    private readonly int capacity;
    private readonly Dictionary<int, Node> cache;
    private readonly Node head;
    private readonly Node tail;
    
    public LRUCache(int capacity)
    {
        if (capacity <= 0)
            throw new ArgumentException("Capacity must be positive", nameof(capacity));
        
        this.capacity = capacity;
        cache = new Dictionary<int, Node>(capacity);
        
        // Initialize dummy head and tail nodes
        head = new Node(0, 0);
        tail = new Node(0, 0);
        head.Next = tail;
        tail.Previous = head;
    }
    
    private void AddToFront(Node node)
    {
        node.Next = head.Next;
        node.Previous = head;
        head.Next.Previous = node;
        head.Next = node;
    }
    
    private void RemoveNode(Node node)
    {
        node.Previous.Next = node.Next;
        node.Next.Previous = node.Previous;
    }
    
    private void MoveToFront(Node node)
    {
        RemoveNode(node);
        AddToFront(node);
    }
    
    private Node RemoveLRU()
    {
        Node lru = tail.Previous;
        RemoveNode(lru);
        return lru;
    }
    
    public int Get(int key)
    {
        if (cache.TryGetValue(key, out Node node))
        {
            MoveToFront(node);
            return node.Value;
        }
        return -1;
    }
    
    public void Put(int key, int value)
    {
        if (cache.TryGetValue(key, out Node node))
        {
            // Update existing node
            node.Value = value;
            MoveToFront(node);
        }
        else
        {
            // Create new node
            Node newNode = new Node(key, value);
            
            if (cache.Count >= capacity)
            {
                // Remove least recently used
                Node lru = RemoveLRU();
                cache.Remove(lru.Key);
            }
            
            // Add new node
            AddToFront(newNode);
            cache[key] = newNode;
        }
    }
}

class Program
{
    static void Main()
    {
        LRUCache cache = new LRUCache(2);
        cache.Put(1, 1);
        cache.Put(2, 2);
        Console.WriteLine(cache.Get(1)); // 1
        cache.Put(3, 3); // Evicts key 2
        Console.WriteLine(cache.Get(2)); // -1
    }
}`,
      hints: ["Use Dictionary for O(1) lookups", "Use doubly linked list for ordering", "Move accessed nodes to front"]
    },

    {
      id: 22,
      title: "Merge Sort",
      difficulty: "Hard",
      description: "Implement the merge sort algorithm.",
      starterCode: `using System;

class Program
{
    static void MergeSort(int[] arr)
    {
        // Your code here
    }

    static void Main()
    {
        int[] arr = { 64, 34, 25, 12, 22, 11, 90 };
        MergeSort(arr);
        Console.WriteLine(string.Join(", ", arr)); // 11, 12, 22, 25, 34, 64, 90
    }
}`,
      solution: `// Merge sort implementation (divide and conquer)
using System;

class Program
{
    static void MergeSort(int[] arr)
    {
        if (arr == null || arr.Length <= 1)
            return;
        
        MergeSort(arr, 0, arr.Length - 1);
    }
    
    static void MergeSort(int[] arr, int left, int right)
    {
        if (left < right)
        {
            int mid = left + (right - left) / 2;
            
            // Sort first and second halves
            MergeSort(arr, left, mid);
            MergeSort(arr, mid + 1, right);
            
            // Merge the sorted halves
            Merge(arr, left, mid, right);
        }
    }
    
    static void Merge(int[] arr, int left, int mid, int right)
    {
        int n1 = mid - left + 1;
        int n2 = right - mid;
        
        // Create temporary arrays
        int[] leftArr = new int[n1];
        int[] rightArr = new int[n2];
        
        // Copy data to temporary arrays
        for (int i = 0; i < n1; i++)
            leftArr[i] = arr[left + i];
        for (int j = 0; j < n2; j++)
            rightArr[j] = arr[mid + 1 + j];
        
        // Merge the temporary arrays
        int k = left;
        int iLeft = 0, iRight = 0;
        
        while (iLeft < n1 && iRight < n2)
        {
            if (leftArr[iLeft] <= rightArr[iRight])
            {
                arr[k] = leftArr[iLeft];
                iLeft++;
            }
            else
            {
                arr[k] = rightArr[iRight];
                iRight++;
            }
            k++;
        }
        
        // Copy remaining elements
        while (iLeft < n1)
        {
            arr[k] = leftArr[iLeft];
            iLeft++;
            k++;
        }
        
        while (iRight < n2)
        {
            arr[k] = rightArr[iRight];
            iRight++;
            k++;
        }
    }

    static void Main()
    {
        int[] arr = { 64, 34, 25, 12, 22, 11, 90 };
        MergeSort(arr);
        Console.WriteLine(string.Join(", ", arr)); // 11, 12, 22, 25, 34, 64, 90
    }
}`,
      hints: ["Divide array into halves", "Recursively sort halves", "Merge sorted halves"]
    },

    {
      id: 23,
      title: "Producer-Consumer Problem",
      difficulty: "Hard",
      description: "Implement the producer-consumer pattern using threads.",
      starterCode: `using System;
using System.Collections.Concurrent;
using System.Threading;
using System.Threading.Tasks;

class Program
{
    // Your code here
    
    static void Main()
    {
        // Test your implementation
    }
}`,
      solution: `// Producer-Consumer using BlockingCollection (simplest and recommended)
using System;
using System.Collections.Concurrent;
using System.Threading;
using System.Threading.Tasks;

class ProducerConsumer
{
    private BlockingCollection<int> buffer;
    private CancellationTokenSource cts;
    
    public ProducerConsumer(int bufferSize)
    {
        buffer = new BlockingCollection<int>(bufferSize);
        cts = new CancellationTokenSource();
    }
    
    public void Start(int producerCount, int consumerCount)
    {
        // Start producers
        for (int i = 0; i < producerCount; i++)
        {
            Task.Run(() => Producer(i + 1));
        }
        
        // Start consumers
        for (int i = 0; i < consumerCount; i++)
        {
            Task.Run(() => Consumer(i + 1));
        }
    }
    
    public void Stop()
    {
        cts.Cancel();
        buffer.CompleteAdding();
    }
    
    private void Producer(int id)
    {
        try
        {
            int item = 1;
            while (!cts.Token.IsCancellationRequested)
            {
                buffer.Add(item, cts.Token);
                Console.WriteLine($"Producer {id} produced: {item}");
                item++;
                Thread.Sleep(100); // Simulate work
            }
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine($"Producer {id} stopped.");
        }
    }
    
    private void Consumer(int id)
    {
        try
        {
            foreach (var item in buffer.GetConsumingEnumerable(cts.Token))
            {
                Console.WriteLine($"Consumer {id} consumed: {item}");
                Thread.Sleep(150); // Simulate work
            }
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine($"Consumer {id} stopped.");
        }
    }
}

class Program
{
    static void Main()
    {
        ProducerConsumer pc = new ProducerConsumer(5);
        pc.Start(2, 2);
        
        // Run for 3 seconds then stop
        Thread.Sleep(3000);
        pc.Stop();
        
        Console.WriteLine("Producer-Consumer completed.");
    }
}`,
      hints: ["Use BlockingCollection for thread safety", "CompleteAdding() signals no more items", "GetConsumingEnumerable() for consumers"]
    },

    {
      id: 24,
      title: "Implement Dictionary",
      difficulty: "Hard",
      description: "Implement a simple Dictionary (hash table) from scratch.",
      starterCode: `using System;
using System.Collections;
using System.Collections.Generic;

public class MyDictionary<TKey, TValue> : IEnumerable<KeyValuePair<TKey, TValue>>
{
    // Your code here
    
    public void Add(TKey key, TValue value)
    {
    }
    
    public bool TryGetValue(TKey key, out TValue value)
    {
        value = default;
        return false;
    }
    
    public bool Remove(TKey key)
    {
        return false;
    }
    
    public IEnumerator<KeyValuePair<TKey, TValue>> GetEnumerator()
    {
        yield break;
    }
    
    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}

class Program
{
    static void Main()
    {
        MyDictionary<string, int> dict = new MyDictionary<string, int>();
        dict.Add("one", 1);
        dict.Add("two", 2);
        
        if (dict.TryGetValue("one", out int value))
            Console.WriteLine(value); // 1
    }
}`,
      solution: `// Simple Dictionary implementation using array of linked lists
using System;
using System.Collections;
using System.Collections.Generic;

public class MyDictionary<TKey, TValue> : IEnumerable<KeyValuePair<TKey, TValue>>
{
    private class Entry
    {
        public TKey Key { get; set; }
        public TValue Value { get; set; }
        public Entry Next { get; set; }
        public int HashCode { get; set; }
        
        public Entry(TKey key, TValue value, int hashCode)
        {
            Key = key;
            Value = value;
            HashCode = hashCode;
        }
    }
    
    private Entry[] buckets;
    private int count;
    private readonly IEqualityComparer<TKey> comparer;
    private const int InitialCapacity = 16;
    private const double LoadFactor = 0.75;
    
    public MyDictionary() : this(InitialCapacity, EqualityComparer<TKey>.Default) { }
    
    public MyDictionary(int capacity) : this(capacity, EqualityComparer<TKey>.Default) { }
    
    public MyDictionary(int capacity, IEqualityComparer<TKey> comparer)
    {
        if (capacity <= 0)
            throw new ArgumentException("Capacity must be positive", nameof(capacity));
        
        this.comparer = comparer ?? throw new ArgumentNullException(nameof(comparer));
        buckets = new Entry[GetPrime(capacity)];
    }
    
    public int Count => count;
    
    private int GetHashCode(TKey key)
    {
        return key == null ? 0 : comparer.GetHashCode(key) & 0x7FFFFFFF;
    }
    
    private int GetBucketIndex(int hashCode, int bucketCount)
    {
        return hashCode % bucketCount;
    }
    
    public void Add(TKey key, TValue value)
    {
        if (key == null)
            throw new ArgumentNullException(nameof(key));
        
        int hashCode = GetHashCode(key);
        int bucketIndex = GetBucketIndex(hashCode, buckets.Length);
        
        // Check if key already exists
        Entry current = buckets[bucketIndex];
        while (current != null)
        {
            if (current.HashCode == hashCode && comparer.Equals(current.Key, key))
                throw new ArgumentException("An element with the same key already exists");
            
            current = current.Next;
        }
        
        // Add new entry at beginning of bucket
        Entry newEntry = new Entry(key, value, hashCode);
        newEntry.Next = buckets[bucketIndex];
        buckets[bucketIndex] = newEntry;
        count++;
        
        // Resize if needed
        if (count > buckets.Length * LoadFactor)
        {
            Resize();
        }
    }
    
    public bool TryGetValue(TKey key, out TValue value)
    {
        if (key == null)
            throw new ArgumentNullException(nameof(key));
        
        int hashCode = GetHashCode(key);
        int bucketIndex = GetBucketIndex(hashCode, buckets.Length);
        
        Entry current = buckets[bucketIndex];
        while (current != null)
        {
            if (current.HashCode == hashCode && comparer.Equals(current.Key, key))
            {
                value = current.Value;
                return true;
            }
            current = current.Next;
        }
        
        value = default;
        return false;
    }
    
    public bool Remove(TKey key)
    {
        if (key == null)
            throw new ArgumentNullException(nameof(key));
        
        int hashCode = GetHashCode(key);
        int bucketIndex = GetBucketIndex(hashCode, buckets.Length);
        
        Entry current = buckets[bucketIndex];
        Entry previous = null;
        
        while (current != null)
        {
            if (current.HashCode == hashCode && comparer.Equals(current.Key, key))
            {
                if (previous == null)
                {
                    buckets[bucketIndex] = current.Next;
                }
                else
                {
                    previous.Next = current.Next;
                }
                count--;
                return true;
            }
            previous = current;
            current = current.Next;
        }
        
        return false;
    }
    
    private void Resize()
    {
        int newSize = GetPrime(buckets.Length * 2);
        Entry[] newBuckets = new Entry[newSize];
        
        // Rehash all entries
        for (int i = 0; i < buckets.Length; i++)
        {
            Entry current = buckets[i];
            while (current != null)
            {
                Entry next = current.Next;
                int newBucketIndex = GetBucketIndex(current.HashCode, newSize);
                current.Next = newBuckets[newBucketIndex];
                newBuckets[newBucketIndex] = current;
                current = next;
            }
        }
        
        buckets = newBuckets;
    }
    
    private static int GetPrime(int min)
    {
        // Simple prime numbers for demonstration
        int[] primes = { 3, 7, 11, 17, 23, 29, 37, 47, 59, 71, 89, 107, 131, 163, 197, 239, 293, 353, 431, 521, 631, 761, 919 };
        
        foreach (int prime in primes)
        {
            if (prime >= min)
                return prime;
        }
        
        return min;
    }
    
    public IEnumerator<KeyValuePair<TKey, TValue>> GetEnumerator()
    {
        for (int i = 0; i < buckets.Length; i++)
        {
            Entry current = buckets[i];
            while (current != null)
            {
                yield return new KeyValuePair<TKey, TValue>(current.Key, current.Value);
                current = current.Next;
            }
        }
    }
    
    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}

class Program
{
    static void Main()
    {
        MyDictionary<string, int> dict = new MyDictionary<string, int>();
        dict.Add("one", 1);
        dict.Add("two", 2);
        
        if (dict.TryGetValue("one", out int value))
            Console.WriteLine(value); // 1
    }
}`,
      hints: ["Array of linked lists (buckets)", "Hash function to determine bucket", "Handle collisions with chaining"]
    },

    {
      id: 25,
      title: "Serialize and Deserialize Binary Tree",
      difficulty: "Hard",
      description: "Serialize a binary tree to string and deserialize it back.",
      starterCode: `using System;
using System.Collections.Generic;

public class TreeNode
{
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int x) { val = x; }
}

public class Codec
{
    // Encodes a tree to a single string.
    public string Serialize(TreeNode root)
    {
        return "";
    }
    
    // Decodes your encoded data to tree.
    public TreeNode Deserialize(string data)
    {
        return null;
    }
}

class Program
{
    static void Main()
    {
        // Test your implementation
    }
}`,
      solution: `// Serialize and deserialize binary tree using preorder traversal
using System;
using System.Collections.Generic;
using System.Text;

public class TreeNode
{
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int x) { val = x; }
}

public class Codec
{
    // Encodes a tree to a single string.
    public string Serialize(TreeNode root)
    {
        StringBuilder sb = new StringBuilder();
        SerializeHelper(root, sb);
        return sb.ToString();
    }
    
    private void SerializeHelper(TreeNode node, StringBuilder sb)
    {
        if (node == null)
        {
            sb.Append("null,");
            return;
        }
        
        sb.Append(node.val).Append(",");
        SerializeHelper(node.left, sb);
        SerializeHelper(node.right, sb);
    }
    
    // Decodes your encoded data to tree.
    public TreeNode Deserialize(string data)
    {
        if (string.IsNullOrEmpty(data))
            return null;
        
        string[] values = data.Split(',', StringSplitOptions.RemoveEmptyEntries);
        Queue<string> queue = new Queue<string>(values);
        return DeserializeHelper(queue);
    }
    
    private TreeNode DeserializeHelper(Queue<string> queue)
    {
        if (queue.Count == 0)
            return null;
        
        string value = queue.Dequeue();
        if (value == "null")
            return null;
        
        TreeNode node = new TreeNode(int.Parse(value));
        node.left = DeserializeHelper(queue);
        node.right = DeserializeHelper(queue);
        return node;
    }
}

class Program
{
    static void Main()
    {
        Codec codec = new Codec();
        
        // Create a sample tree
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.right.left = new TreeNode(4);
        root.right.right = new TreeNode(5);
        
        // Test serialization and deserialization
        string serialized = codec.Serialize(root);
        Console.WriteLine("Serialized: " + serialized);
        
        TreeNode deserialized = codec.Deserialize(serialized);
        string reserialized = codec.Serialize(deserialized);
        Console.WriteLine("Reserialized: " + reserialized);
        Console.WriteLine("Match: " + serialized.Equals(reserialized)); // true
    }
}`,
      hints: ["Use preorder traversal", "Represent null nodes with marker", "Use queue for deserialization"]
    }

  ]
},



cpp: {
  name: "C++",
  icon: cppLogo,
  color: "#00599C",
  exercises: [

    // =========================
    // 🟢 EASY
    // =========================

    {
      id: 1,
      title: "Reverse String",
      difficulty: "Easy",
      description: "Reverse a string without using built-in reverse functions.",
      starterCode: `#include <iostream>
#include <string>
using namespace std;

string reverseString(const string& str) {
    // Your code here
    return "";
}

int main() {
    cout << reverseString("hello") << endl; // "olleh"
    cout << reverseString("C++") << endl;   // "++C"
    return 0;
}`,
      solution: `// Solution using two pointers technique
#include <iostream>
#include <string>
using namespace std;

string reverseString(const string& str) {
    if (str.empty()) return "";
    
    string result = str;
    int left = 0;
    int right = result.length() - 1;
    
    while (left < right) {
        swap(result[left], result[right]);
        left++;
        right--;
    }
    
    return result;
}

// Alternative using constructor with reverse iterators
string reverseStringAlt(const string& str) {
    return string(str.rbegin(), str.rend());
}

int main() {
    cout << reverseString("hello") << endl; // "olleh"
    cout << reverseString("C++") << endl;   // "++C"
    return 0;
}`,
      hints: ["Use two pointers approach", "Swap characters from both ends", "Consider using swap() function"]
    },

    {
      id: 2,
      title: "Find Maximum in Vector",
      difficulty: "Easy",
      description: "Find the maximum value in a vector of integers.",
      starterCode: `#include <iostream>
#include <vector>
#include <climits>
using namespace std;

int findMax(const vector<int>& nums) {
    // Your code here
    return INT_MIN;
}

int main() {
    vector<int> nums = {5, 3, 9, 1, 7};
    cout << findMax(nums) << endl; // 9
    return 0;
}`,
      solution: `// Iterative approach to find maximum
#include <iostream>
#include <vector>
#include <climits>
using namespace std;

int findMax(const vector<int>& nums) {
    if (nums.empty()) {
        throw runtime_error("Vector cannot be empty");
    }
    
    int maxVal = nums[0];
    for (size_t i = 1; i < nums.size(); i++) {
        if (nums[i] > maxVal) {
            maxVal = nums[i];
        }
    }
    return maxVal;
}

// Using iterator
int findMaxIterator(const vector<int>& nums) {
    if (nums.empty()) throw runtime_error("Empty vector");
    
    int maxVal = nums[0];
    for (auto it = nums.begin() + 1; it != nums.end(); ++it) {
        if (*it > maxVal) {
            maxVal = *it;
        }
    }
    return maxVal;
}

int main() {
    vector<int> nums = {5, 3, 9, 1, 7};
    cout << findMax(nums) << endl; // 9
    return 0;
}`,
      hints: ["Initialize max with first element", "Loop through vector", "Update max when finding larger value"]
    },

    {
      id: 3,
      title: "Check Palindrome",
      difficulty: "Easy",
      description: "Check if a string is a palindrome (reads the same forwards and backwards).",
      starterCode: `#include <iostream>
#include <string>
#include <cctype>
#include <algorithm>
using namespace std;

bool isPalindrome(const string& str) {
    // Your code here
    return false;
}

int main() {
    cout << boolalpha;
    cout << isPalindrome("racecar") << endl; // true
    cout << isPalindrome("hello") << endl;   // false
    cout << isPalindrome("A man a plan a canal Panama") << endl; // true
    return 0;
}`,
      solution: `// Check palindrome by comparing characters from both ends
#include <iostream>
#include <string>
#include <cctype>
#include <algorithm>
using namespace std;

bool isPalindrome(const string& str) {
    // Create a cleaned version without spaces and punctuation
    string cleaned;
    for (char c : str) {
        if (isalnum(c)) {
            cleaned += tolower(c);
        }
    }
    
    int left = 0;
    int right = cleaned.length() - 1;
    
    while (left < right) {
        if (cleaned[left] != cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

int main() {
    cout << boolalpha;
    cout << isPalindrome("racecar") << endl; // true
    cout << isPalindrome("hello") << endl;   // false
    cout << isPalindrome("A man a plan a canal Panama") << endl; // true
    return 0;
}`,
      hints: ["Remove non-alphanumeric characters", "Convert to lowercase", "Compare characters from both ends"]
    },

    {
      id: 4,
      title: "Count Vowels",
      difficulty: "Easy",
      description: "Count the number of vowels in a string.",
      starterCode: `#include <iostream>
#include <string>
#include <cctype>
using namespace std;

int countVowels(const string& str) {
    // Your code here
    return 0;
}

int main() {
    cout << countVowels("Hello World") << endl; // 3
    cout << countVowels("C++ Programming") << endl; // 4
    return 0;
}`,
      solution: `// Count vowels using loop
#include <iostream>
#include <string>
#include <cctype>
#include <unordered_set>
using namespace std;

int countVowels(const string& str) {
    unordered_set<char> vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
    int count = 0;
    
    for (char c : str) {
        if (vowels.find(c) != vowels.end()) {
            count++;
        }
    }
    return count;
}

// Using C++ algorithm
int countVowelsAlgorithm(const string& str) {
    unordered_set<char> vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
    return count_if(str.begin(), str.end(), 
                   [&vowels](char c) { return vowels.find(c) != vowels.end(); });
}

int main() {
    cout << countVowels("Hello World") << endl; // 3
    cout << countVowels("C++ Programming") << endl; // 4
    return 0;
}`,
      hints: ["Define set of vowels", "Check each character", "Case insensitive counting"]
    },

    {
      id: 5,
      title: "Factorial Calculation",
      difficulty: "Easy",
      description: "Calculate the factorial of a non-negative integer.",
      starterCode: `#include <iostream>
#include <stdexcept>
using namespace std;

long long factorial(int n) {
    // Your code here
    return 0;
}

int main() {
    cout << factorial(5) << endl; // 120
    cout << factorial(0) << endl; // 1
    return 0;
}`,
      solution: `// Iterative factorial calculation
#include <iostream>
#include <stdexcept>
using namespace std;

long long factorial(int n) {
    if (n < 0) {
        throw invalid_argument("Factorial not defined for negative numbers");
    }
    
    if (n == 0 || n == 1) {
        return 1;
    }
    
    long long result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Recursive version
long long factorialRecursive(int n) {
    if (n < 0) throw invalid_argument("Negative number");
    if (n <= 1) return 1;
    return n * factorialRecursive(n - 1);
}

int main() {
    cout << factorial(5) << endl; // 120
    cout << factorial(0) << endl; // 1
    return 0;
}`,
      hints: ["Handle edge cases (0, 1, negative)", "Start result from 1", "Use long long to prevent overflow"]
    },

    {
      id: 6,
      title: "Sum of Vector Elements",
      difficulty: "Easy",
      description: "Calculate the sum of all elements in a vector.",
      starterCode: `#include <iostream>
#include <vector>
#include <numeric>
using namespace std;

int sumVector(const vector<int>& nums) {
    // Your code here
    return 0;
}

int main() {
    vector<int> nums = {1, 2, 3, 4, 5};
    cout << sumVector(nums) << endl; // 15
    return 0;
}`,
      solution: `// Sum vector elements using loop
#include <iostream>
#include <vector>
#include <numeric>
using namespace std;

int sumVector(const vector<int>& nums) {
    int sum = 0;
    for (int num : nums) {
        sum += num;
    }
    return sum;
}

// Using accumulate from numeric
int sumVectorAccumulate(const vector<int>& nums) {
    return accumulate(nums.begin(), nums.end(), 0);
}

int main() {
    vector<int> nums = {1, 2, 3, 4, 5};
    cout << sumVector(nums) << endl; // 15
    return 0;
}`,
      hints: ["Initialize sum to 0", "Use range-based for loop", "Consider using std::accumulate"]
    },

    {
      id: 7,
      title: "Find Duplicates",
      difficulty: "Easy",
      description: "Find all duplicate elements in an array/vector.",
      starterCode: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

vector<int> findDuplicates(const vector<int>& nums) {
    // Your code here
    return {};
}

int main() {
    vector<int> nums = {1, 2, 3, 2, 1, 4, 5, 4};
    vector<int> duplicates = findDuplicates(nums);
    for (int num : duplicates) {
        cout << num << " ";
    }
    cout << endl; // 1 2 4 (order may vary)
    return 0;
}`,
      solution: `// Find duplicates using unordered_set
#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

vector<int> findDuplicates(const vector<int>& nums) {
    unordered_set<int> seen;
    unordered_set<int> duplicates;
    
    for (int num : nums) {
        if (!seen.insert(num).second) { // insert returns pair<iterator, bool>
            duplicates.insert(num);
        }
    }
    
    return vector<int>(duplicates.begin(), duplicates.end());
}

int main() {
    vector<int> nums = {1, 2, 3, 2, 1, 4, 5, 4};
    vector<int> duplicates = findDuplicates(nums);
    for (int num : duplicates) {
        cout << num << " ";
    }
    cout << endl; // 1 2 4 (order may vary)
    return 0;
}`,
      hints: ["Use unordered_set for O(1) lookups", "set.insert() returns pair indicating success", "Track seen and duplicate sets"]
    },

    {
      id: 8,
      title: "Check Prime Number",
      difficulty: "Easy",
      description: "Check if a number is prime.",
      starterCode: `#include <iostream>
#include <cmath>
using namespace std;

bool isPrime(int n) {
    // Your code here
    return false;
}

int main() {
    cout << boolalpha;
    cout << isPrime(7) << endl;  // true
    cout << isPrime(10) << endl; // false
    cout << isPrime(2) << endl;  // true
    return 0;
}`,
      solution: `// Efficient prime checking
#include <iostream>
#include <cmath>
using namespace std;

bool isPrime(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
    
    // Check divisibility up to sqrt(n)
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}

int main() {
    cout << boolalpha;
    cout << isPrime(7) << endl;  // true
    cout << isPrime(10) << endl; // false
    cout << isPrime(2) << endl;  // true
    return 0;
}`,
      hints: ["Numbers <= 1 are not prime", "Check divisibility by 2 and 3 first", "Only check up to sqrt(n)"]
    },

    {
      id: 9,
      title: "Remove Duplicates from Vector",
      difficulty: "Easy",
      description: "Remove duplicates from a vector while preserving order.",
      starterCode: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

vector<int> removeDuplicates(const vector<int>& nums) {
    // Your code here
    return {};
}

int main() {
    vector<int> nums = {1, 2, 2, 3, 4, 4, 5};
    vector<int> result = removeDuplicates(nums);
    for (int num : result) {
        cout << num << " ";
    }
    cout << endl; // 1 2 3 4 5
    return 0;
}`,
      solution: `// Remove duplicates using unordered_set
#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

vector<int> removeDuplicates(const vector<int>& nums) {
    unordered_set<int> seen;
    vector<int> result;
    
    for (int num : nums) {
        if (seen.find(num) == seen.end()) {
            seen.insert(num);
            result.push_back(num);
        }
    }
    
    return result;
}

int main() {
    vector<int> nums = {1, 2, 2, 3, 4, 4, 5};
    vector<int> result = removeDuplicates(nums);
    for (int num : result) {
        cout << num << " ";
    }
    cout << endl; // 1 2 3 4 5
    return 0;
}`,
      hints: ["Use unordered_set to track seen elements", "Add to result only if not seen", "Preserve original order"]
    },

    {
      id: 10,
      title: "Fibonacci Sequence",
      difficulty: "Easy",
      description: "Generate the first n numbers of the Fibonacci sequence.",
      starterCode: `#include <iostream>
#include <vector>
using namespace std;

vector<int> fibonacci(int n) {
    // Your code here
    return {};
}

int main() {
    vector<int> result = fibonacci(10);
    for (int num : result) {
        cout << num << " ";
    }
    cout << endl; // 0 1 1 2 3 5 8 13 21 34
    return 0;
}`,
      solution: `// Generate Fibonacci sequence iteratively
#include <iostream>
#include <vector>
using namespace std;

vector<int> fibonacci(int n) {
    vector<int> result;
    if (n <= 0) return result;
    
    result.reserve(n);
    
    if (n >= 1) result.push_back(0);
    if (n >= 2) result.push_back(1);
    
    for (int i = 2; i < n; i++) {
        result.push_back(result[i-1] + result[i-2]);
    }
    
    return result;
}

int main() {
    vector<int> result = fibonacci(10);
    for (int num : result) {
        cout << num << " ";
    }
    cout << endl; // 0 1 1 2 3 5 8 13 21 34
    return 0;
}`,
      hints: ["Handle base cases (0, 1)", "Initialize first two numbers", "Each number is sum of previous two"]
    },

    // =========================
    // 🟡 MEDIUM
    // =========================

    {
      id: 11,
      title: "Valid Parentheses",
      difficulty: "Medium",
      description: "Check if a string containing parentheses, brackets, and braces is valid.",
      starterCode: `#include <iostream>
#include <stack>
#include <unordered_map>
#include <string>
using namespace std;

bool isValid(const string& s) {
    // Your code here
    return false;
}

int main() {
    cout << boolalpha;
    cout << isValid("()") << endl;     // true
    cout << isValid("()[]{}") << endl; // true
    cout << isValid("(]") << endl;     // false
    cout << isValid("([)]") << endl;   // false
    return 0;
}`,
      solution: `// Classic stack problem for matching parentheses
#include <iostream>
#include <stack>
#include <unordered_map>
#include <string>
using namespace std;

bool isValid(const string& s) {
    stack<char> st;
    unordered_map<char, char> pairs = {
        {')', '('},
        {']', '['},
        {'}', '{'}
    };
    
    for (char c : s) {
        // If it's an opening bracket, push to stack
        if (c == '(' || c == '[' || c == '{') {
            st.push(c);
        }
        // If it's a closing bracket
        else if (pairs.find(c) != pairs.end()) {
            if (st.empty() || st.top() != pairs[c]) {
                return false;
            }
            st.pop();
        }
    }
    
    return st.empty();
}

int main() {
    cout << boolalpha;
    cout << isValid("()") << endl;     // true
    cout << isValid("()[]{}") << endl; // true
    cout << isValid("(]") << endl;     // false
    cout << isValid("([)]") << endl;   // false
    return 0;
}`,
      hints: ["Use stack<char> data structure", "Map closing to opening brackets", "Check if stack is empty at end"]
    },

    {
      id: 12,
      title: "Two Sum",
      difficulty: "Medium",
      description: "Given an array of integers and a target, find two numbers that sum to target and return their indices.",
      starterCode: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> twoSum(const vector<int>& nums, int target) {
    // Your code here
    return {};
}

int main() {
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    vector<int> result = twoSum(nums, target);
    cout << "[" << result[0] << ", " << result[1] << "]" << endl; // [0, 1]
    return 0;
}`,
      solution: `// Two Sum using unordered_map for O(n) time complexity
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> twoSum(const vector<int>& nums, int target) {
    unordered_map<int, int> numToIndex;
    
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        
        if (numToIndex.find(complement) != numToIndex.end()) {
            return {numToIndex[complement], i};
        }
        
        numToIndex[nums[i]] = i;
    }
    
    return {}; // No solution found
}

int main() {
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    vector<int> result = twoSum(nums, target);
    cout << "[" << result[0] << ", " << result[1] << "]" << endl; // [0, 1]
    return 0;
}`,
      hints: ["Use unordered_map to store numbers and indices", "Look for complement", "One-pass solution"]
    },

    {
      id: 13,
      title: "Merge Two Sorted Vectors",
      difficulty: "Medium",
      description: "Merge two sorted vectors into one sorted vector.",
      starterCode: `#include <iostream>
#include <vector>
using namespace std;

vector<int> mergeSortedVectors(const vector<int>& vec1, const vector<int>& vec2) {
    // Your code here
    return {};
}

int main() {
    vector<int> vec1 = {1, 3, 5};
    vector<int> vec2 = {2, 4, 6};
    vector<int> result = mergeSortedVectors(vec1, vec2);
    for (int num : result) {
        cout << num << " ";
    }
    cout << endl; // 1 2 3 4 5 6
    return 0;
}`,
      solution: `// Merge two sorted vectors using three pointers
#include <iostream>
#include <vector>
using namespace std;

vector<int> mergeSortedVectors(const vector<int>& vec1, const vector<int>& vec2) {
    vector<int> result;
    result.reserve(vec1.size() + vec2.size());
    
    size_t i = 0, j = 0;
    
    while (i < vec1.size() && j < vec2.size()) {
        if (vec1[i] < vec2[j]) {
            result.push_back(vec1[i]);
            i++;
        } else {
            result.push_back(vec2[j]);
            j++;
        }
    }
    
    // Copy remaining elements
    while (i < vec1.size()) {
        result.push_back(vec1[i]);
        i++;
    }
    
    while (j < vec2.size()) {
        result.push_back(vec2[j]);
        j++;
    }
    
    return result;
}

int main() {
    vector<int> vec1 = {1, 3, 5};
    vector<int> vec2 = {2, 4, 6};
    vector<int> result = mergeSortedVectors(vec1, vec2);
    for (int num : result) {
        cout << num << " ";
    }
    cout << endl; // 1 2 3 4 5 6
    return 0;
}`,
      hints: ["Use three pointers/indices", "Compare elements from both vectors", "Handle remaining elements"]
    },

    {
      id: 14,
      title: "Anagram Check",
      difficulty: "Medium",
      description: "Check if two strings are anagrams of each other.",
      starterCode: `#include <iostream>
#include <string>
#include <algorithm>
#include <unordered_map>
using namespace std;

bool areAnagrams(const string& str1, const string& str2) {
    // Your code here
    return false;
}

int main() {
    cout << boolalpha;
    cout << areAnagrams("listen", "silent") << endl; // true
    cout << areAnagrams("hello", "world") << endl;   // false
    return 0;
}`,
      solution: `// Check anagrams using character frequency
#include <iostream>
#include <string>
#include <algorithm>
#include <unordered_map>
using namespace std;

bool areAnagrams(const string& str1, const string& str2) {
    if (str1.length() != str2.length()) {
        return false;
    }
    
    // Sort and compare
    string sorted1 = str1;
    string sorted2 = str2;
    sort(sorted1.begin(), sorted1.end());
    sort(sorted2.begin(), sorted2.end());
    
    return sorted1 == sorted2;
}

// Alternative using character count
bool areAnagramsCount(const string& str1, const string& str2) {
    if (str1.length() != str2.length()) return false;
    
    unordered_map<char, int> charCount;
    
    for (char c : str1) {
        charCount[c]++;
    }
    
    for (char c : str2) {
        if (--charCount[c] < 0) {
            return false;
        }
    }
    
    return true;
}

int main() {
    cout << boolalpha;
    cout << areAnagrams("listen", "silent") << endl; // true
    cout << areAnagrams("hello", "world") << endl;   // false
    return 0;
}`,
      hints: ["Check lengths first", "Sort both strings and compare", "Use unordered_map for character counting"]
    },

    {
      id: 15,
      title: "Find Missing Number",
      difficulty: "Medium",
      description: "Find the missing number in a vector containing numbers from 1 to n.",
      starterCode: `#include <iostream>
#include <vector>
#include <numeric>
using namespace std;

int findMissingNumber(const vector<int>& nums, int n) {
    // Your code here
    return 0;
}

int main() {
    vector<int> nums = {1, 2, 4, 5}; // Missing 3
    cout << findMissingNumber(nums, 5) << endl; // 3
    return 0;
}`,
      solution: `// Find missing number using mathematical formula
#include <iostream>
#include <vector>
#include <numeric>
using namespace std;

int findMissingNumber(const vector<int>& nums, int n) {
    // Calculate expected sum of 1 to n
    int expectedSum = n * (n + 1) / 2;
    
    // Calculate actual sum
    int actualSum = accumulate(nums.begin(), nums.end(), 0);
    
    // Missing number is the difference
    return expectedSum - actualSum;
}

// Alternative using XOR
int findMissingNumberXOR(const vector<int>& nums, int n) {
    int xor1 = 0;
    for (int i = 1; i <= n; i++) {
        xor1 ^= i;
    }
    
    int xor2 = 0;
    for (int num : nums) {
        xor2 ^= num;
    }
    
    return xor1 ^ xor2;
}

int main() {
    vector<int> nums = {1, 2, 4, 5}; // Missing 3
    cout << findMissingNumber(nums, 5) << endl; // 3
    return 0;
}`,
      hints: ["Use formula for sum of 1 to n", "Calculate expected vs actual sum", "XOR approach avoids overflow"]
    },

    {
      id: 16,
      title: "Singleton Pattern",
      difficulty: "Medium",
      description: "Implement the Singleton design pattern thread-safe in C++.",
      starterCode: `#include <iostream>
#include <mutex>
using namespace std;

class Singleton {
    // Your code here
    
public:
    void showMessage() {
        cout << "Singleton instance!" << endl;
    }
};

int main() {
    Singleton& obj1 = Singleton::getInstance();
    Singleton& obj2 = Singleton::getInstance();
    cout << (&obj1 == &obj2) << endl; // true
    return 0;
}`,
      solution: `// Thread-safe Singleton using Meyer's Singleton (C++11 guaranteed)
#include <iostream>
#include <mutex>
using namespace std;

class Singleton {
private:
    Singleton() = default;
    ~Singleton() = default;
    Singleton(const Singleton&) = delete;
    Singleton& operator=(const Singleton&) = delete;
    
public:
    static Singleton& getInstance() {
        static Singleton instance; // Thread-safe in C++11
        return instance;
    }
    
    void showMessage() {
        cout << "Singleton instance!" << endl;
    }
};

// Alternative with double-checked locking (for older C++)
class SingletonLock {
private:
    static SingletonLock* instance;
    static mutex mtx;
    
    SingletonLock() = default;
    ~SingletonLock() = default;
    SingletonLock(const SingletonLock&) = delete;
    SingletonLock& operator=(const SingletonLock&) = delete;
    
public:
    static SingletonLock* getInstance() {
        if (instance == nullptr) {
            lock_guard<mutex> lock(mtx);
            if (instance == nullptr) {
                instance = new SingletonLock();
            }
        }
        return instance;
    }
    
    static void destroy() {
        lock_guard<mutex> lock(mtx);
        delete instance;
        instance = nullptr;
    }
};

// Initialize static members
SingletonLock* SingletonLock::instance = nullptr;
mutex SingletonLock::mtx;

int main() {
    Singleton& obj1 = Singleton::getInstance();
    Singleton& obj2 = Singleton::getInstance();
    cout << (&obj1 == &obj2) << endl; // true
    return 0;
}`,
      hints: ["Use static local variable (Meyer's Singleton)", "Delete copy constructor and assignment", "Make constructor private"]
    },

    {
      id: 17,
      title: "Binary Search",
      difficulty: "Medium",
      description: "Implement binary search algorithm on a sorted vector.",
      starterCode: `#include <iostream>
#include <vector>
using namespace std;

int binarySearch(const vector<int>& arr, int target) {
    // Your code here
    return -1;
}

int main() {
    vector<int> arr = {1, 3, 5, 7, 9, 11};
    cout << binarySearch(arr, 7) << endl;  // 3
    cout << binarySearch(arr, 12) << endl; // -1
    return 0;
}`,
      solution: `// Classic binary search implementation
#include <iostream>
#include <vector>
using namespace std;

int binarySearch(const vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2; // Avoid overflow
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1; // Not found
}

// Recursive version
int binarySearchRecursive(const vector<int>& arr, int target, int left, int right) {
    if (left > right) return -1;
    
    int mid = left + (right - left) / 2;
    
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) 
        return binarySearchRecursive(arr, target, mid + 1, right);
    else 
        return binarySearchRecursive(arr, target, left, mid - 1);
}

int main() {
    vector<int> arr = {1, 3, 5, 7, 9, 11};
    cout << binarySearch(arr, 7) << endl;  // 3
    cout << binarySearch(arr, 12) << endl; // -1
    return 0;
}`,
      hints: ["Vector must be sorted", "Calculate mid without overflow", "Adjust left/right pointers"]
    },

    {
      id: 18,
      title: "Bubble Sort",
      difficulty: "Medium",
      description: "Implement bubble sort algorithm.",
      starterCode: `#include <iostream>
#include <vector>
using namespace std;

void bubbleSort(vector<int>& arr) {
    // Your code here
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    bubbleSort(arr);
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl; // 11 12 22 25 34 64 90
    return 0;
}`,
      solution: `// Bubble sort implementation with optimization
#include <iostream>
#include <vector>
using namespace std;

void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    bool swapped;
    
    for (int i = 0; i < n - 1; i++) {
        swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        
        // If no swapping occurred, array is sorted
        if (!swapped) {
            break;
        }
    }
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    bubbleSort(arr);
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl; // 11 12 22 25 34 64 90
    return 0;
}`,
      hints: ["Outer loop for passes", "Inner loop for comparisons", "Swap adjacent elements if in wrong order"]
    },

    {
      id: 19,
      title: "Find First Non-Repeating Character",
      difficulty: "Medium",
      description: "Find the first non-repeating character in a string.",
      starterCode: `#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>
using namespace std;

char firstNonRepeating(const string& str) {
    // Your code here
    return '\0';
}

int main() {
    cout << firstNonRepeating("swiss") << endl; // w
    cout << firstNonRepeating("hello") << endl; // h
    return 0;
}`,
      solution: `// Find first non-repeating character using unordered_map
#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>
using namespace std;

char firstNonRepeating(const string& str) {
    unordered_map<char, int> charCount;
    
    // First pass: count characters
    for (char c : str) {
        charCount[c]++;
    }
    
    // Second pass: find first with count 1
    for (char c : str) {
        if (charCount[c] == 1) {
            return c;
        }
    }
    
    return '\0'; // No non-repeating character found
}

int main() {
    cout << firstNonRepeating("swiss") << endl; // w
    cout << firstNonRepeating("hello") << endl; // h
    return 0;
}`,
      hints: ["Count frequency of each character", "Two-pass approach", "Use unordered_map for O(1) lookups"]
    },

    {
      id: 20,
      title: "Implement Queue using Stack",
      difficulty: "Medium",
      description: "Implement a queue data structure using two stacks.",
      starterCode: `#include <iostream>
#include <stack>
using namespace std;

class QueueUsingStack {
private:
    stack<int> s1, s2;
    
public:
    void enqueue(int item) {
        // Your code here
    }
    
    int dequeue() {
        // Your code here
        return -1;
    }
    
    bool empty() {
        // Your code here
        return true;
    }
};

int main() {
    QueueUsingStack queue;
    queue.enqueue(1);
    queue.enqueue(2);
    cout << queue.dequeue() << endl; // 1
    cout << queue.dequeue() << endl; // 2
    return 0;
}`,
      solution: `// Queue implementation using two stacks
#include <iostream>
#include <stack>
#include <stdexcept>
using namespace std;

class QueueUsingStack {
private:
    stack<int> s1; // For enqueue
    stack<int> s2; // For dequeue
    
    void transferIfNeeded() {
        if (s2.empty()) {
            // Move all elements from s1 to s2
            while (!s1.empty()) {
                s2.push(s1.top());
                s1.pop();
            }
        }
    }
    
public:
    void enqueue(int item) {
        s1.push(item);
    }
    
    int dequeue() {
        if (empty()) {
            throw runtime_error("Queue is empty");
        }
        
        transferIfNeeded();
        int front = s2.top();
        s2.pop();
        return front;
    }
    
    int front() {
        if (empty()) {
            throw runtime_error("Queue is empty");
        }
        
        transferIfNeeded();
        return s2.top();
    }
    
    bool empty() {
        return s1.empty() && s2.empty();
    }
    
    int size() {
        return s1.size() + s2.size();
    }
};

int main() {
    QueueUsingStack queue;
    queue.enqueue(1);
    queue.enqueue(2);
    cout << queue.dequeue() << endl; // 1
    cout << queue.dequeue() << endl; // 2
    return 0;
}`,
      hints: ["Use two stacks", "Push to s1 for enqueue", "Pop from s2 for dequeue", "Transfer when s2 empty"]
    },

    // =========================
    // 🔴 HARD
    // =========================

    {
      id: 21,
      title: "LRU Cache",
      difficulty: "Hard",
      description: "Design and implement an LRU (Least Recently Used) cache.",
      starterCode: `#include <iostream>
#include <unordered_map>
#include <list>
using namespace std;

class LRUCache {
private:
    int capacity;
    // Your code here
    
public:
    LRUCache(int capacity) {
        // Your code here
    }
    
    int get(int key) {
        // Your code here
        return -1;
    }
    
    void put(int key, int value) {
        // Your code here
    }
};

int main() {
    LRUCache cache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    cout << cache.get(1) << endl; // 1
    cache.put(3, 3); // Evicts key 2
    cout << cache.get(2) << endl; // -1
    return 0;
}`,
      solution: `// LRU Cache implementation using unordered_map and list
#include <iostream>
#include <unordered_map>
#include <list>
#include <utility>
using namespace std;

class LRUCache {
private:
    int capacity;
    // list stores (key, value) pairs in order of use
    list<pair<int, int>> items;
    // map stores key -> iterator to list node
    unordered_map<int, list<pair<int, int>>::iterator> cache;
    
public:
    LRUCache(int capacity) : capacity(capacity) {
        if (capacity <= 0) {
            throw invalid_argument("Capacity must be positive");
        }
    }
    
    int get(int key) {
        auto it = cache.find(key);
        if (it == cache.end()) {
            return -1; // Key not found
        }
        
        // Move accessed item to front (most recently used)
        items.splice(items.begin(), items, it->second);
        return it->second->second;
    }
    
    void put(int key, int value) {
        auto it = cache.find(key);
        
        if (it != cache.end()) {
            // Update existing item
            it->second->second = value;
            // Move to front
            items.splice(items.begin(), items, it->second);
        } else {
            // Check capacity
            if (cache.size() >= capacity) {
                // Remove least recently used item (from back)
                int lruKey = items.back().first;
                cache.erase(lruKey);
                items.pop_back();
            }
            
            // Add new item to front
            items.emplace_front(key, value);
            cache[key] = items.begin();
        }
    }
};

int main() {
    LRUCache cache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    cout << cache.get(1) << endl; // 1
    cache.put(3, 3); // Evicts key 2
    cout << cache.get(2) << endl; // -1
    return 0;
}`,
      hints: ["Use unordered_map for O(1) lookups", "Use list for ordering", "Store iterators in map", "splice() to move nodes"]
    },

    {
      id: 22,
      title: "Merge Sort",
      difficulty: "Hard",
      description: "Implement the merge sort algorithm.",
      starterCode: `#include <iostream>
#include <vector>
using namespace std;

void mergeSort(vector<int>& arr) {
    // Your code here
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    mergeSort(arr);
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl; // 11 12 22 25 34 64 90
    return 0;
}`,
      solution: `// Merge sort implementation (divide and conquer)
#include <iostream>
#include <vector>
using namespace std;

void merge(vector<int>& arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    // Create temporary arrays
    vector<int> leftArr(n1);
    vector<int> rightArr(n2);
    
    // Copy data to temporary arrays
    for (int i = 0; i < n1; i++) {
        leftArr[i] = arr[left + i];
    }
    for (int j = 0; j < n2; j++) {
        rightArr[j] = arr[mid + 1 + j];
    }
    
    // Merge the temporary arrays
    int i = 0, j = 0, k = left;
    
    while (i < n1 && j < n2) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }
    
    // Copy remaining elements
    while (i < n1) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }
    
    while (j < n2) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}

void mergeSortHelper(vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        
        // Sort first and second halves
        mergeSortHelper(arr, left, mid);
        mergeSortHelper(arr, mid + 1, right);
        
        // Merge the sorted halves
        merge(arr, left, mid, right);
    }
}

void mergeSort(vector<int>& arr) {
    if (arr.size() <= 1) return;
    mergeSortHelper(arr, 0, arr.size() - 1);
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    mergeSort(arr);
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl; // 11 12 22 25 34 64 90
    return 0;
}`,
      hints: ["Divide array into halves", "Recursively sort halves", "Merge sorted halves", "Use helper function"]
    },

    {
      id: 23,
      title: "Smart Pointer Implementation",
      difficulty: "Hard",
      description: "Implement a simple unique_ptr from scratch.",
      starterCode: `#include <iostream>
#include <utility>
using namespace std;

template<typename T>
class UniquePtr {
private:
    T* ptr;
    
public:
    // Your code here
    
    T* get() const { return ptr; }
    T& operator*() const { return *ptr; }
    T* operator->() const { return ptr; }
    explicit operator bool() const { return ptr != nullptr; }
};

class TestClass {
public:
    int value;
    TestClass(int v) : value(v) {
        cout << "Constructed: " << value << endl;
    }
    ~TestClass() {
        cout << "Destroyed: " << value << endl;
    }
};

int main() {
    UniquePtr<TestClass> ptr1(new TestClass(10));
    cout << "Value: " << ptr1->value << endl;
    
    UniquePtr<TestClass> ptr2 = move(ptr1);
    if (!ptr1) {
        cout << "ptr1 is now null" << endl;
    }
    return 0;
}`,
      solution: `// Simple unique_ptr implementation
#include <iostream>
#include <utility>
using namespace std;

template<typename T>
class UniquePtr {
private:
    T* ptr;
    
public:
    // Constructor
    explicit UniquePtr(T* p = nullptr) : ptr(p) {}
    
    // Destructor
    ~UniquePtr() {
        delete ptr;
    }
    
    // Delete copy constructor and copy assignment
    UniquePtr(const UniquePtr&) = delete;
    UniquePtr& operator=(const UniquePtr&) = delete;
    
    // Move constructor
    UniquePtr(UniquePtr&& other) noexcept : ptr(other.ptr) {
        other.ptr = nullptr;
    }
    
    // Move assignment
    UniquePtr& operator=(UniquePtr&& other) noexcept {
        if (this != &other) {
            delete ptr;
            ptr = other.ptr;
            other.ptr = nullptr;
        }
        return *this;
    }
    
    // Reset
    void reset(T* p = nullptr) {
        delete ptr;
        ptr = p;
    }
    
    // Release
    T* release() {
        T* temp = ptr;
        ptr = nullptr;
        return temp;
    }
    
    // Getters and operators
    T* get() const { return ptr; }
    T& operator*() const { return *ptr; }
    T* operator->() const { return ptr; }
    explicit operator bool() const { return ptr != nullptr; }
    
    // Swap
    void swap(UniquePtr& other) noexcept {
        std::swap(ptr, other.ptr);
    }
};

class TestClass {
public:
    int value;
    TestClass(int v) : value(v) {
        cout << "Constructed: " << value << endl;
    }
    ~TestClass() {
        cout << "Destroyed: " << value << endl;
    }
};

int main() {
    UniquePtr<TestClass> ptr1(new TestClass(10));
    cout << "Value: " << ptr1->value << endl;
    
    UniquePtr<TestClass> ptr2 = move(ptr1);
    if (!ptr1) {
        cout << "ptr1 is now null" << endl;
    }
    return 0;
}`,
      hints: ["Delete copy operations", "Implement move semantics", "Manage ownership transfer", "Use noexcept for move operations"]
    },

    {
      id: 24,
      title: "Implement Hash Map",
      difficulty: "Hard",
      description: "Implement a simple hash map (unordered_map) from scratch.",
      starterCode: `#include <iostream>
#include <vector>
#include <list>
#include <utility>
using namespace std;

template<typename K, typename V>
class HashMap {
private:
    vector<list<pair<K, V>>> buckets;
    size_t numBuckets;
    size_t size;
    
public:
    HashMap(size_t bucketCount = 16) : numBuckets(bucketCount), size(0) {
        buckets.resize(bucketCount);
    }
    
    void insert(const K& key, const V& value) {
        // Your code here
    }
    
    bool find(const K& key, V& value) {
        // Your code here
        return false;
    }
    
    bool erase(const K& key) {
        // Your code here
        return false;
    }
    
    size_t getSize() const { return size; }
};

int main() {
    HashMap<string, int> map;
    map.insert("one", 1);
    map.insert("two", 2);
    
    int value;
    if (map.find("one", value)) {
        cout << "Found: " << value << endl; // 1
    }
    return 0;
}`,
      solution: `// Simple HashMap implementation using separate chaining
#include <iostream>
#include <vector>
#include <list>
#include <utility>
#include <functional>
using namespace std;

template<typename K, typename V>
class HashMap {
private:
    struct Node {
        K key;
        V value;
        Node(const K& k, const V& v) : key(k), value(v) {}
    };
    
    vector<list<Node>> buckets;
    size_t numBuckets;
    size_t numElements;
    double loadFactorThreshold = 0.75;
    
    size_t hash(const K& key) const {
        hash<K> hasher;
        return hasher(key) % numBuckets;
    }
    
    void rehash() {
        size_t newBucketCount = numBuckets * 2;
        vector<list<Node>> newBuckets(newBucketCount);
        
        // Rehash all elements
        for (auto& bucket : buckets) {
            for (auto& node : bucket) {
                size_t newIndex = hash<K>()(node.key) % newBucketCount;
                newBuckets[newIndex].emplace_back(node.key, node.value);
            }
        }
        
        buckets = move(newBuckets);
        numBuckets = newBucketCount;
    }
    
public:
    HashMap(size_t bucketCount = 16) : numBuckets(bucketCount), numElements(0) {
        buckets.resize(bucketCount);
    }
    
    void insert(const K& key, const V& value) {
        // Check load factor
        if ((double)numElements / numBuckets >= loadFactorThreshold) {
            rehash();
        }
        
        size_t index = hash(key);
        
        // Check if key already exists
        for (auto& node : buckets[index]) {
            if (node.key == key) {
                node.value = value; // Update existing
                return;
            }
        }
        
        // Insert new key-value pair
        buckets[index].emplace_back(key, value);
        numElements++;
    }
    
    bool find(const K& key, V& value) const {
        size_t index = hash(key);
        
        for (const auto& node : buckets[index]) {
            if (node.key == key) {
                value = node.value;
                return true;
            }
        }
        return false;
    }
    
    bool erase(const K& key) {
        size_t index = hash(key);
        
        auto& bucket = buckets[index];
        for (auto it = bucket.begin(); it != bucket.end(); ++it) {
            if (it->key == key) {
                bucket.erase(it);
                numElements--;
                return true;
            }
        }
        return false;
    }
    
    size_t size() const { return numElements; }
    bool empty() const { return numElements == 0; }
    
    // Operator[] for convenience
    V& operator[](const K& key) {
        size_t index = hash(key);
        
        // Check if key exists
        for (auto& node : buckets[index]) {
            if (node.key == key) {
                return node.value;
            }
        }
        
        // Insert new key with default value
        buckets[index].emplace_back(key, V{});
        numElements++;
        return buckets[index].back().value;
    }
};

int main() {
    HashMap<string, int> map;
    map.insert("one", 1);
    map.insert("two", 2);
    
    int value;
    if (map.find("one", value)) {
        cout << "Found: " << value << endl; // 1
    }
    
    // Using operator[]
    map["three"] = 3;
    cout << map["three"] << endl; // 3
    
    return 0;
}`,
      hints: ["Use vector of linked lists (buckets)", "Hash function to determine bucket", "Handle collisions with chaining", "Implement rehashing"]
    },

    {
      id: 25,
      title: "Serialize and Deserialize Binary Tree",
      difficulty: "Hard",
      description: "Serialize a binary tree to string and deserialize it back.",
      starterCode: `#include <iostream>
#include <string>
#include <queue>
#include <sstream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Codec {
public:
    // Encodes a tree to a single string.
    string serialize(TreeNode* root) {
        // Your code here
        return "";
    }
    
    // Decodes your encoded data to tree.
    TreeNode* deserialize(string data) {
        // Your code here
        return nullptr;
    }
};

int main() {
    Codec codec;
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->right->left = new TreeNode(4);
    root->right->right = new TreeNode(5);
    
    string serialized = codec.serialize(root);
    cout << "Serialized: " << serialized << endl;
    
    TreeNode* deserialized = codec.deserialize(serialized);
    // Clean up memory
    return 0;
}`,
      solution: `// Serialize and deserialize binary tree using level order traversal
#include <iostream>
#include <string>
#include <queue>
#include <sstream>
#include <vector>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Codec {
public:
    // Encodes a tree to a single string (level order)
    string serialize(TreeNode* root) {
        if (!root) return "";
        
        queue<TreeNode*> q;
        q.push(root);
        stringstream ss;
        
        while (!q.empty()) {
            TreeNode* node = q.front();
            q.pop();
            
            if (node) {
                ss << node->val << ",";
                q.push(node->left);
                q.push(node->right);
            } else {
                ss << "null,";
            }
        }
        
        string result = ss.str();
        // Remove trailing comma
        if (!result.empty()) {
            result.pop_back();
        }
        return result;
    }
    
    // Decodes your encoded data to tree
    TreeNode* deserialize(string data) {
        if (data.empty()) return nullptr;
        
        vector<string> tokens;
        stringstream ss(data);
        string token;
        
        while (getline(ss, token, ',')) {
            tokens.push_back(token);
        }
        
        if (tokens.empty() || tokens[0] == "null") return nullptr;
        
        TreeNode* root = new TreeNode(stoi(tokens[0]));
        queue<TreeNode*> q;
        q.push(root);
        
        size_t i = 1;
        while (!q.empty() && i < tokens.size()) {
            TreeNode* node = q.front();
            q.pop();
            
            // Left child
            if (i < tokens.size() && tokens[i] != "null") {
                node->left = new TreeNode(stoi(tokens[i]));
                q.push(node->left);
            }
            i++;
            
            // Right child
            if (i < tokens.size() && tokens[i] != "null") {
                node->right = new TreeNode(stoi(tokens[i]));
                q.push(node->right);
            }
            i++;
        }
        
        return root;
    }
};

// Helper function to delete tree (prevent memory leak)
void deleteTree(TreeNode* root) {
    if (!root) return;
    deleteTree(root->left);
    deleteTree(root->right);
    delete root;
}

int main() {
    Codec codec;
    
    // Create a sample tree
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->right->left = new TreeNode(4);
    root->right->right = new TreeNode(5);
    
    // Test serialization and deserialization
    string serialized = codec.serialize(root);
    cout << "Serialized: " << serialized << endl;
    
    TreeNode* deserialized = codec.deserialize(serialized);
    string reserialized = codec.serialize(deserialized);
    cout << "Reserialized: " << reserialized << endl;
    cout << "Match: " << (serialized == reserialized) << endl;
    
    // Clean up
    deleteTree(root);
    deleteTree(deserialized);
    
    return 0;
}`,
      hints: ["Use level order traversal", "Represent null nodes with marker", "Use queue for deserialization", "Handle memory properly"]
    }

  ]
},








  react: {
    name: "React",
    icon: reactLogo,
    color: "#61dafb",
    exercises: [
      {
        id: 1,
        title: "Contador con Hooks",
        difficulty: "Fácil",
        description: "Crea un componente contador usando useState y useEffect.",
        starterCode: `import React from 'react';

function Counter() {
  // Usa useState para el contador
  // Usa useEffect para actualizar el título del documento
  
  return (
    <div>
      {/* Tu JSX aquí */}
    </div>
  );
}

export default Counter;`,
        solution: `import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = \`Contador: \${count}\`;
  }, [count]);
  
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;`,
        hints: ["useState retorna [valor, setter]", "useEffect con dependencias"]
      },
      {
        id: 2,
        title: "Lista de Tareas",
        difficulty: "Medio",
        description: "Crea un componente de lista de tareas con agregar, completar y eliminar.",
        starterCode: `import React from 'react';

function TodoList() {
  // Estado para las tareas
  // Estado para el input
  
  const addTodo = () => {
    // Tu código aquí
  };
  
  const toggleTodo = (id) => {
    // Tu código aquí
  };
  
  const deleteTodo = (id) => {
    // Tu código aquí
  };
  
  return (
    <div>
      {/* Input y botón para agregar */}
      {/* Lista de tareas */}
    </div>
  );
}

export default TodoList;`,
        solution: `import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: input,
        completed: false
      }]);
      setInput('');
    }
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h1>Lista de Tareas</h1>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Nueva tarea..."
        />
        <button onClick={addTodo}>Agregar</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ margin: '10px 0' }}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;`,
        hints: ["Usa map para renderizar la lista", "filter para eliminar", "spread operator para actualizar"]
      },
      {
        id: 3,
        title: "Custom Hook: useFetch",
        difficulty: "Medio",
        description: "Crea un custom hook para hacer peticiones HTTP.",
        starterCode: `import React from 'react';

// Crea el custom hook useFetch
function useFetch(url) {
  // Retorna { data, loading, error }
}

// Componente que usa el hook
function UserList() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );
  
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <ul>
      {data?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;`,
        solution: `import React, { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error en la petición');
        }
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}

function UserList() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );
  
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <ul>
      {data?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;`,
        hints: ["Custom hooks empiezan con 'use'", "Maneja loading, error y data"]
      },
      {
        id: 4,
        title: "Context API",
        difficulty: "Medio",
        description: "Implementa un tema oscuro/claro usando Context API.",
        starterCode: `import React from 'react';

// Crea el ThemeContext
// Crea el ThemeProvider

// Componente que consume el contexto
function ThemedButton() {
  // Usa el contexto
  
  return (
    <button>
      Toggle Theme
    </button>
  );
}

function App() {
  return (
    // Envuelve con el Provider
    <div>
      <h1>Tema con Context</h1>
      <ThemedButton />
    </div>
  );
}

export default App;`,
        solution: `import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  
  const toggleTheme = () => setIsDark(!isDark);
  
  const theme = {
    isDark,
    toggleTheme,
    colors: {
      background: isDark ? '#333' : '#fff',
      text: isDark ? '#fff' : '#333',
    }
  };
  
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider');
  }
  return context;
}

function ThemedButton() {
  const { isDark, toggleTheme, colors } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        padding: '10px 20px',
        border: '1px solid',
        cursor: 'pointer'
      }}
    >
      {isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { colors } = useTheme();
  
  return (
    <div style={{
      backgroundColor: colors.background,
      color: colors.text,
      minHeight: '100vh',
      padding: '20px'
    }}>
      <h1>Tema con Context</h1>
      <ThemedButton />
    </div>
  );
}

export default App;`,
        hints: ["createContext() crea el contexto", "useContext() lo consume", "Crea un custom hook useTheme"]
      },
      {
        id: 5,
        title: "useReducer",
        difficulty: "Medio",
        description: "Implementa un carrito de compras usando useReducer.",
        starterCode: `import React from 'react';

// Define las acciones
const actions = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_CART: 'CLEAR_CART'
};

// Implementa el reducer
function cartReducer(state, action) {
  // Tu código aquí
}

function ShoppingCart() {
  // Usa useReducer
  
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 29 },
    { id: 3, name: 'Teclado', price: 79 }
  ];
  
  return (
    <div>
      {/* Productos y carrito */}
    </div>
  );
}

export default ShoppingCart;`,
        solution: `import React, { useReducer } from 'react';

const actions = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_CART: 'CLEAR_CART'
};

function cartReducer(state, action) {
  switch (action.type) {
    case actions.ADD_ITEM:
      const existingItem = state.items.find(i => i.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    
    case actions.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload)
      };
    
    case actions.CLEAR_CART:
      return { items: [] };
    
    default:
      return state;
  }
}

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });
  
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 29 },
    { id: 3, name: 'Teclado', price: 79 }
  ];
  
  const total = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );
  
  return (
    <div style={{ padding: '20px' }}>
      <h1>🛒 Tienda</h1>
      
      <h2>Productos</h2>
      {products.map(product => (
        <div key={product.id} style={{ margin: '10px 0' }}>
          {product.name} - \${product.price}
          <button onClick={() => dispatch({
            type: actions.ADD_ITEM,
            payload: product
          })}>
            Agregar
          </button>
        </div>
      ))}
      
      <h2>Carrito ({cart.items.length} items)</h2>
      {cart.items.map(item => (
        <div key={item.id}>
          {item.name} x{item.quantity} = \${item.price * item.quantity}
          <button onClick={() => dispatch({
            type: actions.REMOVE_ITEM,
            payload: item.id
          })}>
            🗑️
          </button>
        </div>
      ))}
      
      <h3>Total: \${total}</h3>
      <button onClick={() => dispatch({ type: actions.CLEAR_CART })}>
        Vaciar Carrito
      </button>
    </div>
  );
}

export default ShoppingCart;`,
        hints: ["useReducer(reducer, initialState)", "dispatch({ type, payload })"]
      }
    ]
  },
  html: {
    name: "HTML",
    icon: htmlLogo,
    color: "#e34c26",
    exercises: [
      {
        id: 1,
        title: "Formulario Semántico",
        difficulty: "Fácil",
        description: "Crea un formulario de contacto usando HTML5 semántico con validación nativa.",
        starterCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Formulario de Contacto</title>
</head>
<body>
  <!-- Crea un formulario con:
       - Nombre (requerido)
       - Email (requerido, validación de email)
       - Teléfono (patrón de 10 dígitos)
       - Mensaje (mínimo 20 caracteres)
       - Botón de envío
  -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Formulario de Contacto</title>
  <style>
    form { max-width: 400px; margin: 20px auto; }
    label { display: block; margin-top: 10px; }
    input, textarea { width: 100%; padding: 8px; margin-top: 5px; }
    button { margin-top: 15px; padding: 10px 20px; }
  </style>
</head>
<body>
  <main>
    <h1>Contáctanos</h1>
    <form action="/submit" method="POST">
      <label for="nombre">Nombre:</label>
      <input 
        type="text" 
        id="nombre" 
        name="nombre" 
        required
        placeholder="Tu nombre completo"
      >
      
      <label for="email">Email:</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        required
        placeholder="correo@ejemplo.com"
      >
      
      <label for="telefono">Teléfono:</label>
      <input 
        type="tel" 
        id="telefono" 
        name="telefono" 
        pattern="[0-9]{10}"
        placeholder="1234567890"
        title="Ingresa 10 dígitos"
      >
      
      <label for="mensaje">Mensaje:</label>
      <textarea 
        id="mensaje" 
        name="mensaje" 
        rows="4"
        minlength="20"
        required
        placeholder="Escribe tu mensaje (mínimo 20 caracteres)"
      ></textarea>
      
      <button type="submit">Enviar Mensaje</button>
    </form>
  </main>
</body>
</html>`,
        hints: ["Usa type='email' para validación automática", "pattern acepta regex", "minlength valida longitud mínima"]
      },
      {
        id: 2,
        title: "Tabla Accesible",
        difficulty: "Fácil",
        description: "Crea una tabla de datos accesible con cabeceras, pie y atributos ARIA.",
        starterCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Tabla de Ventas</title>
</head>
<body>
  <!-- Crea una tabla con:
       - Caption descriptivo
       - thead con cabeceras
       - tbody con datos
       - tfoot con totales
       - scope en las cabeceras
  -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Tabla de Ventas</title>
  <style>
    table { border-collapse: collapse; width: 100%; max-width: 600px; margin: 20px auto; }
    th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
    thead { background: #333; color: white; }
    tfoot { background: #f5f5f5; font-weight: bold; }
    tbody tr:nth-child(even) { background: #f9f9f9; }
    caption { font-size: 1.2em; margin-bottom: 10px; font-weight: bold; }
  </style>
</head>
<body>
  <table role="table" aria-describedby="tabla-desc">
    <caption id="tabla-desc">Reporte de Ventas Q1 2024</caption>
    
    <thead>
      <tr>
        <th scope="col">Producto</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Precio Unit.</th>
        <th scope="col">Total</th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <th scope="row">Laptop Pro</th>
        <td>15</td>
        <td>$999</td>
        <td>$14,985</td>
      </tr>
      <tr>
        <th scope="row">Monitor 4K</th>
        <td>25</td>
        <td>$450</td>
        <td>$11,250</td>
      </tr>
      <tr>
        <th scope="row">Teclado RGB</th>
        <td>50</td>
        <td>$120</td>
        <td>$6,000</td>
      </tr>
    </tbody>
    
    <tfoot>
      <tr>
        <th scope="row" colspan="3">Total General</th>
        <td>$32,235</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>`,
        hints: ["scope='col' para cabeceras de columna", "scope='row' para cabeceras de fila", "caption describe la tabla"]
      },
      {
        id: 3,
        title: "Layout Semántico",
        difficulty: "Medio",
        description: "Crea una página con estructura semántica completa (header, nav, main, aside, footer).",
        starterCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Blog</title>
</head>
<body>
  <!-- Estructura semántica:
       - header con logo y nav
       - main con article y aside
       - footer con info de copyright
  -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Blog</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; line-height: 1.6; }
    
    header { background: #333; color: white; padding: 1rem; }
    header nav ul { list-style: none; display: flex; gap: 20px; }
    header nav a { color: white; text-decoration: none; }
    
    .container { display: grid; grid-template-columns: 1fr 300px; gap: 20px; padding: 20px; max-width: 1200px; margin: 0 auto; }
    
    article { background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
    article header { background: none; color: #333; padding: 0 0 10px; }
    
    aside { background: #f5f5f5; padding: 20px; border-radius: 8px; }
    
    footer { background: #333; color: white; text-align: center; padding: 1rem; margin-top: 20px; }
    
    @media (max-width: 768px) {
      .container { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <header>
    <nav aria-label="Navegación principal">
      <a href="/" aria-label="Inicio">🏠 Mi Blog</a>
      <ul>
        <li><a href="/articulos">Artículos</a></li>
        <li><a href="/sobre-mi">Sobre Mí</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  </header>
  
  <div class="container">
    <main>
      <article>
        <header>
          <h1>Título del Artículo</h1>
          <p><time datetime="2024-01-15">15 de Enero, 2024</time> por <address><a href="/autor">Juan Pérez</a></address></p>
        </header>
        
        <section>
          <h2>Introducción</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum.</p>
        </section>
        
        <section>
          <h2>Desarrollo</h2>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <figure>
            <img src="/imagen.jpg" alt="Descripción de la imagen" width="400">
            <figcaption>Pie de imagen descriptivo</figcaption>
          </figure>
        </section>
        
        <footer>
          <p>Categoría: <a href="/cat/tecnologia">Tecnología</a></p>
        </footer>
      </article>
    </main>
    
    <aside aria-label="Barra lateral">
      <section>
        <h2>Sobre el Autor</h2>
        <p>Desarrollador web con 10 años de experiencia.</p>
      </section>
      
      <section>
        <h2>Artículos Populares</h2>
        <nav aria-label="Artículos relacionados">
          <ul>
            <li><a href="/art1">Cómo aprender HTML</a></li>
            <li><a href="/art2">CSS para principiantes</a></li>
          </ul>
        </nav>
      </section>
    </aside>
  </div>
  
  <footer>
    <p><small>&copy; 2024 Mi Blog. Todos los derechos reservados.</small></p>
  </footer>
</body>
</html>`,
        hints: ["main contiene el contenido principal", "article es contenido independiente", "aside es contenido relacionado"]
      },
      {
        id: 4,
        title: "Multimedia HTML5",
        difficulty: "Fácil",
        description: "Implementa video y audio con controles personalizados y fallbacks.",
        starterCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Multimedia</title>
</head>
<body>
  <!-- Implementa:
       - Video con múltiples fuentes y subtítulos
       - Audio con controles
       - Picture para imágenes responsive
  -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Multimedia HTML5</title>
  <style>
    .media-container { max-width: 800px; margin: 20px auto; }
    video, audio { width: 100%; }
    figure { margin: 20px 0; }
    figcaption { text-align: center; color: #666; }
  </style>
</head>
<body>
  <main class="media-container">
    <h1>Galería Multimedia</h1>
    
    <section>
      <h2>Video</h2>
      <figure>
        <video 
          controls 
          poster="/poster.jpg"
          preload="metadata"
          width="800"
          height="450"
        >
          <source src="/video.webm" type="video/webm">
          <source src="/video.mp4" type="video/mp4">
          <track 
            kind="subtitles" 
            src="/subs-es.vtt" 
            srclang="es" 
            label="Español"
            default
          >
          <track 
            kind="subtitles" 
            src="/subs-en.vtt" 
            srclang="en" 
            label="English"
          >
          <p>Tu navegador no soporta video HTML5. 
             <a href="/video.mp4">Descarga el video</a>
          </p>
        </video>
        <figcaption>Demo de características HTML5</figcaption>
      </figure>
    </section>
    
    <section>
      <h2>Audio</h2>
      <figure>
        <audio controls preload="metadata">
          <source src="/audio.ogg" type="audio/ogg">
          <source src="/audio.mp3" type="audio/mpeg">
          <p>Tu navegador no soporta audio HTML5.
             <a href="/audio.mp3">Descarga el audio</a>
          </p>
        </audio>
        <figcaption>Podcast Episodio 1</figcaption>
      </figure>
    </section>
    
    <section>
      <h2>Imagen Responsive</h2>
      <figure>
        <picture>
          <source 
            media="(min-width: 800px)" 
            srcset="/hero-large.webp" 
            type="image/webp"
          >
          <source 
            media="(min-width: 800px)" 
            srcset="/hero-large.jpg"
          >
          <source 
            media="(min-width: 400px)" 
            srcset="/hero-medium.webp" 
            type="image/webp"
          >
          <source 
            media="(min-width: 400px)" 
            srcset="/hero-medium.jpg"
          >
          <img 
            src="/hero-small.jpg" 
            alt="Imagen hero responsive"
            loading="lazy"
            width="800"
            height="400"
          >
        </picture>
        <figcaption>Imagen que se adapta al tamaño de pantalla</figcaption>
      </figure>
    </section>
  </main>
</body>
</html>`,
        hints: ["source permite múltiples formatos", "track añade subtítulos", "picture permite imágenes responsive"]
      },
      {
        id: 5,
        title: "Microdata y SEO",
        difficulty: "Medio",
        description: "Añade microdata Schema.org a una página de producto para mejorar SEO.",
        starterCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Producto</title>
</head>
<body>
  <!-- Crea una página de producto con:
       - Microdata de Schema.org/Product
       - Metadatos Open Graph
       - Datos estructurados JSON-LD
  -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>iPhone 15 Pro - TechStore</title>
  <meta name="description" content="iPhone 15 Pro con chip A17 Pro. El smartphone más potente de Apple. Envío gratis.">
  
  <!-- Open Graph -->
  <meta property="og:title" content="iPhone 15 Pro - TechStore">
  <meta property="og:description" content="El smartphone más potente de Apple con chip A17 Pro">
  <meta property="og:image" content="https://example.com/iphone15.jpg">
  <meta property="og:url" content="https://example.com/iphone-15-pro">
  <meta property="og:type" content="product">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="iPhone 15 Pro - TechStore">
  
  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "iPhone 15 Pro",
    "image": "https://example.com/iphone15.jpg",
    "description": "iPhone 15 Pro con chip A17 Pro y cámara de 48MP",
    "brand": {
      "@type": "Brand",
      "name": "Apple"
    },
    "offers": {
      "@type": "Offer",
      "price": "999.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "TechStore"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "2456"
    }
  }
  </script>
</head>
<body>
  <main>
    <!-- Microdata inline -->
    <article itemscope itemtype="https://schema.org/Product">
      <h1 itemprop="name">iPhone 15 Pro</h1>
      
      <img 
        itemprop="image" 
        src="/iphone15.jpg" 
        alt="iPhone 15 Pro en color titanio"
        width="400"
      >
      
      <div itemprop="brand" itemscope itemtype="https://schema.org/Brand">
        <span>Marca: <span itemprop="name">Apple</span></span>
      </div>
      
      <p itemprop="description">
        El iPhone 15 Pro cuenta con el revolucionario chip A17 Pro, 
        cámara principal de 48MP y el nuevo botón de acción.
      </p>
      
      <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
        <p>
          Precio: 
          <span itemprop="priceCurrency" content="USD">$</span>
          <span itemprop="price" content="999.00">999.00</span>
        </p>
        <link itemprop="availability" href="https://schema.org/InStock">
        <p>✅ En stock - Envío gratis</p>
      </div>
      
      <div itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">
        <p>
          ⭐ <span itemprop="ratingValue">4.8</span>/5 
          (<span itemprop="reviewCount">2,456</span> reseñas)
        </p>
      </div>
      
      <button>Añadir al Carrito</button>
    </article>
  </main>
</body>
</html>`,
        hints: ["itemscope define el alcance", "itemtype el tipo de Schema", "itemprop las propiedades"]
      }
    ]
  },
  css: {
    name: "CSS",
    icon: cssLogo,
    color: "#264de4",
    exercises: [
      {
        id: 1,
        title: "Flexbox Layout",
        difficulty: "Fácil",
        description: "Crea un layout de tarjetas responsivo usando Flexbox.",
        starterCode: `/* Crea un contenedor flex con tarjetas que:
   - Se distribuyan uniformemente
   - Se envuelvan en múltiples líneas
   - Tengan espacio entre ellas
   - Se centren en pantallas pequeñas
*/

.container {
  /* Tu código aquí */
}

.card {
  /* Tu código aquí */
}`,
        solution: `.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  flex: 1 1 300px; /* grow, shrink, basis */
  max-width: 350px;
  min-height: 200px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card h3 {
  margin: 0 0 10px;
  color: #333;
}

.card p {
  color: #666;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .card {
    flex: 1 1 100%;
    max-width: 100%;
  }
}`,
        hints: ["flex-wrap: wrap permite múltiples líneas", "gap controla el espacio", "flex: 1 1 300px es shorthand"]
      },
      {
        id: 2,
        title: "CSS Grid Dashboard",
        difficulty: "Medio",
        description: "Crea un layout de dashboard con CSS Grid.",
        starterCode: `/* Crea un dashboard con:
   - Header que ocupe todo el ancho
   - Sidebar a la izquierda
   - Main content en el centro
   - Widgets en la derecha
   - Footer al fondo
*/

.dashboard {
  /* Tu código aquí */
}

.header { /* Tu código */ }
.sidebar { /* Tu código */ }
.main { /* Tu código */ }
.widgets { /* Tu código */ }
.footer { /* Tu código */ }`,
        solution: `.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr 300px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar main widgets"
    "footer footer footer";
  min-height: 100vh;
  gap: 0;
}

.header {
  grid-area: header;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar {
  grid-area: sidebar;
  background: #2d3748;
  color: white;
  padding: 20px;
}

.sidebar nav a {
  display: block;
  padding: 12px 15px;
  color: #a0aec0;
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 5px;
  transition: all 0.3s;
}

.sidebar nav a:hover,
.sidebar nav a.active {
  background: #4a5568;
  color: white;
}

.main {
  grid-area: main;
  background: #f7fafc;
  padding: 30px;
  overflow-y: auto;
}

.widgets {
  grid-area: widgets;
  background: #edf2f7;
  padding: 20px;
}

.widget {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.footer {
  grid-area: footer;
  background: #1a202c;
  color: #a0aec0;
  padding: 15px 30px;
  text-align: center;
}

/* Responsive */
@media (max-width: 1024px) {
  .dashboard {
    grid-template-columns: 200px 1fr;
    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
  }
  .widgets {
    display: none;
  }
}

@media (max-width: 768px) {
  .dashboard {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main"
      "footer";
  }
  .sidebar {
    display: none;
  }
}`,
        hints: ["grid-template-areas para layout visual", "grid-area asigna elementos", "Usa media queries para responsive"]
      },
      {
        id: 3,
        title: "Animaciones CSS",
        difficulty: "Medio",
        description: "Crea animaciones atractivas con @keyframes y transitions.",
        starterCode: `/* Crea:
   1. Un botón con efecto ripple
   2. Un loader animado
   3. Una card con flip animation
*/

.ripple-button {
  /* Tu código aquí */
}

.loader {
  /* Tu código aquí */
}

.flip-card {
  /* Tu código aquí */
}`,
        solution: `/* ========= RIPPLE BUTTON ========= */
.ripple-button {
  position: relative;
  padding: 15px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.ripple-button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.ripple-button::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
  transform: scale(0);
  opacity: 0;
}

.ripple-button:active::after {
  animation: ripple 0.6s ease-out;
}

@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}

/* ========= LOADER ========= */
.loader {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Loader alternativo - puntos */
.loader-dots {
  display: flex;
  gap: 8px;
}

.loader-dots span {
  width: 12px;
  height: 12px;
  background: #667eea;
  border-radius: 50%;
  animation: bounce 1.4s ease-in-out infinite;
}

.loader-dots span:nth-child(1) { animation-delay: 0s; }
.loader-dots span:nth-child(2) { animation-delay: 0.2s; }
.loader-dots span:nth-child(3) { animation-delay: 0.4s; }

@keyframes bounce {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.5; }
  40% { transform: scale(1); opacity: 1; }
}

/* ========= FLIP CARD ========= */
.flip-card {
  width: 300px;
  height: 200px;
  perspective: 1000px;
}

.flip-card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.flip-card-front {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.flip-card-back {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  transform: rotateY(180deg);
}`,
        hints: ["@keyframes define la animación", "animation-delay crea efectos escalonados", "perspective para 3D"]
      },
      {
        id: 4,
        title: "Variables CSS y Temas",
        difficulty: "Fácil",
        description: "Implementa un sistema de temas usando CSS Custom Properties.",
        starterCode: `/* Crea un sistema de temas con:
   - Variables para colores, espaciado, tipografía
   - Tema claro y oscuro
   - Transiciones suaves entre temas
*/

:root {
  /* Variables aquí */
}

[data-theme="dark"] {
  /* Override para tema oscuro */
}`,
        solution: `:root {
  /* Colores base */
  --color-primary: #667eea;
  --color-primary-dark: #5a67d8;
  --color-secondary: #764ba2;
  --color-success: #48bb78;
  --color-warning: #ed8936;
  --color-error: #f56565;
  
  /* Tema claro (default) */
  --bg-primary: #ffffff;
  --bg-secondary: #f7fafc;
  --bg-tertiary: #edf2f7;
  
  --text-primary: #1a202c;
  --text-secondary: #4a5568;
  --text-muted: #a0aec0;
  
  --border-color: #e2e8f0;
  --shadow-color: rgba(0, 0, 0, 0.1);
  
  /* Espaciado */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  
  /* Tipografía */
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.5rem;
  --font-size-2xl: 2rem;
  
  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 300ms ease;
}

/* Tema oscuro */
[data-theme="dark"] {
  --bg-primary: #1a202c;
  --bg-secondary: #2d3748;
  --bg-tertiary: #4a5568;
  
  --text-primary: #f7fafc;
  --text-secondary: #e2e8f0;
  --text-muted: #a0aec0;
  
  --border-color: #4a5568;
  --shadow-color: rgba(0, 0, 0, 0.3);
}

/* Uso de las variables */
body {
  font-family: var(--font-family);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color var(--transition-normal),
              color var(--transition-normal);
}

.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  box-shadow: 0 4px 6px var(--shadow-color);
  transition: all var(--transition-normal);
}

.button {
  background: var(--color-primary);
  color: white;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  transition: background var(--transition-fast);
}

.button:hover {
  background: var(--color-primary-dark);
}

.text-muted {
  color: var(--text-muted);
  font-size: var(--font-size-sm);
}`,
        hints: ["var(--nombre) usa la variable", "data-theme permite cambiar temas", "Transitions suavizan el cambio"]
      },
      {
        id: 5,
        title: "Responsive Avanzado",
        difficulty: "Medio",
        description: "Implementa un diseño responsive con container queries y clamp().",
        starterCode: `/* Usa técnicas modernas:
   - clamp() para tipografía fluida
   - Container queries
   - Aspect-ratio
   - min/max con grid
*/

.responsive-section {
  /* Tu código aquí */
}`,
        solution: `/* ========= TIPOGRAFÍA FLUIDA ========= */
:root {
  /* clamp(min, preferred, max) */
  --font-size-h1: clamp(2rem, 5vw + 1rem, 4rem);
  --font-size-h2: clamp(1.5rem, 3vw + 0.5rem, 2.5rem);
  --font-size-body: clamp(1rem, 1vw + 0.75rem, 1.25rem);
  
  /* Espaciado fluido */
  --space-fluid: clamp(1rem, 3vw, 3rem);
}

h1 { font-size: var(--font-size-h1); }
h2 { font-size: var(--font-size-h2); }
body { font-size: var(--font-size-body); }

/* ========= CONTAINER QUERIES ========= */
.card-container {
  container-type: inline-size;
  container-name: card;
}

.card {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 12px;
}

/* Cuando el contenedor es mayor a 400px */
@container card (min-width: 400px) {
  .card {
    grid-template-columns: 150px 1fr;
    padding: 1.5rem;
  }
  
  .card-image {
    aspect-ratio: 1;
  }
}

/* Cuando el contenedor es mayor a 600px */
@container card (min-width: 600px) {
  .card {
    grid-template-columns: 200px 1fr auto;
  }
  
  .card-actions {
    flex-direction: column;
  }
}

/* ========= ASPECT RATIO ========= */
.video-wrapper {
  aspect-ratio: 16 / 9;
  background: #000;
  overflow: hidden;
}

.square-image {
  aspect-ratio: 1;
  object-fit: cover;
}

.portrait {
  aspect-ratio: 3 / 4;
}

/* ========= GRID AUTO-FIT ========= */
.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: var(--space-fluid);
  padding: var(--space-fluid);
}

/* ========= RESPONSIVE SIN MEDIA QUERIES ========= */
.flexible-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.flexible-layout > * {
  /* Crece desde 300px, máximo 1fr */
  flex: 1 1 min(100%, 300px);
}

/* ========= GRID INTELIGENTE ========= */
.smart-grid {
  display: grid;
  grid-template-columns: 
    repeat(auto-fill, minmax(min(250px, 100%), 1fr));
  gap: clamp(1rem, 2vw, 2rem);
}

/* ========= IMÁGENES RESPONSIVE ========= */
.responsive-image {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

/* Lazy loading styles */
.responsive-image[loading="lazy"] {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}`,
        hints: ["clamp() permite valores fluidos", "container-type habilita container queries", "min() dentro de minmax() previene overflow"]
      }
    ]
  }
};

export const getLanguageById = (id) => exercises[id];
export const getAllLanguages = () => Object.keys(exercises).map(key => ({
  id: key,
  ...exercises[key]
}));
