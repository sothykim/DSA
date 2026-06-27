// ============================================================
//  DATA: 50 QUESTIONS (Removed Selection Algorithms & String Matching)
// ============================================================
const questions = [
    // ---- Part 1: Python Data Types and Structures (1-10) ----
    {
        id: 1,
        question: 'តើទិន្នន័យប្រភេទណាខាងក្រោមដែល **មិនអាចផ្លាស់ប្តូរបាន (immutable)**?',
        options: ['List', 'Dictionary', 'Tuple', 'Set'],
        correct: 2,
        explanation: 'Tuple គឺជា immutable មានន័យថាមិនអាចបន្ថែម កែប្រែ ឬលុបធាតុបានទេ។'
    },
    {
        id: 2,
        question: 'តើប្រតិបត្តិករណាខាងក្រោមប្រើសម្រាប់ពិនិត្យមើលថាតើតម្លៃមួយមានក្នុងបញ្ជីឬអត់?',
        options: ['`is`', '`==`', '`in`', '`and`'],
        correct: 2,
        explanation: '`in` ជា membership operator ប្រើដើម្បីពិនិត្យថាតើតម្លៃមួយមានក្នុង sequence ឬអត់។'
    },
    {
        id: 3,
        question: 'តើអ្វីជាលទ្ធផលនៃកូដ `print(type(10.5))`?',
        options: ['<class "int">', '<class "float">', '<class "complex">', '<class "str">'],
        correct: 1,
        explanation: '10.5 ជា floating-point number ដូច្នេះ type គឺ `float`។'
    },
    {
        id: 4,
        question: 'តើមុខងារមួយណាខាងក្រោមប្រើដើម្បីបង្កើត set ដែលមិនអាចផ្លាស់ប្តូរបាន (immutable set)?',
        options: ['`set()`', '`frozenset()`', '`dict()`', '`list()`'],
        correct: 1,
        explanation: '`frozenset()` បង្កើត set ដែល immutable មិនអាចបន្ថែម ឬលុបធាតុបានទេ។'
    },
    {
        id: 5,
        question: 'តើ `defaultdict` ខុសពី dictionary ធម្មតាយ៉ាងដូចម្តេច?',
        options: ['វារក្សាលំដាប់នៃ keys', 'វាមិនដែល raise KeyError ទេ', 'វាអាចផ្ទុកតម្លៃបានច្រើនជាងមួយ',
            'វាលឿនជាង dictionary ធម្មតា'
        ],
        correct: 1,
        explanation: '`defaultdict` ផ្តល់តម្លៃលំនាំដើម (default value) នៅពេលដែល key មិនទាន់មាន ដូច្នេះវាមិន raise KeyError ទេ។'
    },
    {
        id: 6,
        question: 'តើប្រតិបត្តិករ `is` ប្រើសម្រាប់អ្វី?',
        options: ['ប្រៀបធៀបតម្លៃ', 'ប្រៀបធៀបអត្តសញ្ញាណ (identity) នៃវត្ថុ', 'ពិនិត្យសមាជិកភាព',
            'ប្រមាណវិធីតក្កវិជ្ជា'
        ],
        correct: 1,
        explanation: '`is` ពិនិត្យថាតើអថេរពីរសំដៅទៅលើវត្ថុដូចគ្នាឬអត់ (identity comparison)។'
    },
    {
        id: 7,
        question: 'តើទិន្នន័យប្រភេទណាដែលអនុញ្ញាតឱ្យមានតម្លៃស្ទួន (duplicate values)?',
        options: ['Set', 'Dictionary (keys)', 'List', 'Frozenset'],
        correct: 2,
        explanation: 'List អនុញ្ញាតឱ្យមានតម្លៃស្ទួន ខណៈ set និង frozenset មិនអនុញ្ញាត ហើយ keys របស់ dictionary ក៏មិនអនុញ្ញាតដែរ។'
    },
    {
        id: 8,
        question: 'តើ `Counter` ក្នុង `collections` module ប្រើសម្រាប់អ្វី?',
        options: ['រាប់ចំនួន hashable objects', 'តម្រៀបបញ្ជី', 'ផ្សំ dictionaries',
            'បង្កើត tuple ដែលមានឈ្មោះ'
        ],
        correct: 0,
        explanation: '`Counter` គឺជា subclass របស់ dict ដែលប្រើសម្រាប់រាប់ចំនួន hashable objects។'
    },
    {
        id: 9,
        question: 'តើ `deque` មានអត្ថប្រយោជន៍អ្វីជាង list ធម្មតា?',
        options: ['អាចចូលដំណើរការតាម index បានលឿនជាង',
            'បន្ថែម និងលុបធាតុពីចុងទាំងពីរបានលឿន O(1)', 'ប្រើអង្គចងចាំតិចជាង',
            'អាចផ្ទុកទិន្នន័យគ្រប់ប្រភេទ'
        ],
        correct: 1,
        explanation: '`deque` (double-ended queue) គាំទ្រការបន្ថែម និងលុបធាតុពីចុងទាំងពីរដោយ O(1) ខណៈ list ត្រូវការ O(n) សម្រាប់ការបន្ថែម/លុបនៅដើមបញ្ជី។'
    },
    {
        id: 10,
        question: 'តើកូដ `print(list(range(5, 0, -2)))` ផ្តល់លទ្ធផលអ្វី?',
        options: ['`[5, 3, 1]`', '`[5, 4, 3, 2, 1]`', '`[5, 3, 1, -1]`', '`[5, 3]`'],
        correct: 0,
        explanation: '`range(5, 0, -2)` ចាប់ផ្តើមពី 5 ថយចុះ 2 រាល់ដង រហូតដល់ធំជាង 0 បាន `[5, 3, 1]`។'
    },

    // ---- Part 2: Algorithm Analysis and Design (11-20) ----
    {
        id: 11,
        question: 'តើ Big O notation ប្រើសម្រាប់អ្វី?',
        options: ['វាស់ពេលវេលាប្រតិបត្តិពិតប្រាកដ', 'វាស់ព្រំដែនខាងលើ (upper bound) នៃភាពស្មុគស្មាញ',
            'វាស់ព្រំដែនខាងក្រោម (lower bound)', 'វាស់ព្រំដែនតឹង (tight bound)'
        ],
        correct: 1,
        explanation: 'Big O បង្ហាញពីដែនកំណត់ខាងលើ (worst-case) នៃការរីកចម្រើននៃពេលវេលាប្រតិបត្តិរបស់ algorithm។'
    },
    {
        id: 12,
        question: 'តើភាពស្មុគស្មាញពេលវេលានៃ binary search គឺជាអ្វី?',
        options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(n²)'],
        correct: 1,
        explanation: 'Binary search កាត់បញ្ជីពាក់កណ្តាលរាល់ជំហាន ដូច្នេះភាពស្មុគស្មាញគឺ O(log n)។'
    },
    {
        id: 13,
        question: 'តើ algorithm មួយណាដែលប្រើ Divide and Conquer?',
        options: ['Bubble Sort', 'Merge Sort', 'Selection Sort', 'Insertion Sort'],
        correct: 1,
        explanation: 'Merge Sort បែងចែកបញ្ជីជាពីរផ្នែក តម្រៀបផ្នែកនីមួយៗ រួចបញ្ចូលគ្នា (Divide and Conquer)។'
    },
    {
        id: 14,
        question: 'តើ Dynamic Programming ខុសពី Divide and Conquer យ៉ាងដូចម្តេច?',
        options: ['Dynamic Programming ប្រើ recursion', 'Dynamic Programming រក្សាទុកលទ្ធផលនៃ subproblems ដើម្បីប្រើឡើងវិញ',
            'Divide and Conquer លឿនជាង', 'មិនខុសគ្នាទេ'
        ],
        correct: 1,
        explanation: 'Dynamic Programming ប្រើ memoization ដើម្បីរក្សាទុកលទ្ធផលនៃ subproblems ដដែលៗ ដើម្បីចៀសវាងការគណនាឡើងវិញ។'
    },
    {
        id: 15,
        question: 'តើអ្វីជាភាពស្មុគស្មាញពេលវេលានៃកូដខាងក្រោម?<br><code>for i in range(n):<br>&nbsp;&nbsp;for j in range(n):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(i, j)</code>',
        options: ['O(n)', 'O(log n)', 'O(n²)', 'O(n log n)'],
        correct: 2,
        explanation: 'រង្វិលជុំជាប់គ្នា (nested loop) ពីរជាន់ ប្រតិបត្តិ n × n = n² ដង ដូច្នេះ O(n²)។'
    },
    {
        id: 16,
        question: 'តើ Greedy Algorithm មានលក្ខណៈពិសេសអ្វី?',
        options: ['តែងតែផ្តល់ដំណោះស្រាយល្អបំផុតជានិច្ច',
            'ជ្រើសរើសដំណោះស្រាយល្អបំផុតនៅជំហាននីមួយៗ (local optimum)',
            'ប្រើ recursion ជានិច្ច', 'មិនអាចប្រើសម្រាប់ optimization problems'
        ],
        correct: 1,
        explanation: 'Greedy algorithm ជ្រើសរើសដំណោះស្រាយដែលមើលទៅល្អបំផុតនៅពេលនោះ (local optimum) ដោយសង្ឃឹមថានឹងនាំទៅរក global optimum។'
    },
    {
        id: 17,
        question: 'តើ amortized analysis ប្រើសម្រាប់អ្វី?',
        options: ['វិភាគករណីអាក្រក់បំផុត', 'វិភាគការចំណាយជាមធ្យមនៃប្រតិបត្តិការជាបន្តបន្ទាប់',
            'វិភាគករណីល្អបំផុត', 'វិភាគការប្រើប្រាស់អង្គចងចាំ'
        ],
        correct: 1,
        explanation: 'Amortized analysis គណនាការចំណាយជាមធ្យមនៃប្រតិបត្តិការក្នុងមួយជំហាន សម្រាប់ប្រតិបត្តិការជាច្រើនដង។'
    },
    {
        id: 18,
        question: 'តើអ្វីជាភាពស្មុគស្មាញនៃកូដខាងក្រោម?<br><code>i = 1<br>while i < n:<br>&nbsp;&nbsp;i *= 2</code>',
        options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
        correct: 1,
        explanation: 'i កើនឡើងជាលំដាប់ 2, 4, 8, ... រហូតដល់ n ដូច្នេះចំនួនជំហានគឺ log₂(n)។'
    },
    {
        id: 19,
        question: 'តើ Theta (Θ) notation បង្ហាញពីអ្វី?',
        options: ['ព្រំដែនខាងលើ', 'ព្រំដែនខាងក្រោម', 'ព្រំដែនតឹង (tight bound)',
            'ពេលវេលាប្រតិបត្តិពិតប្រាកដ'
        ],
        correct: 2,
        explanation: 'Θ notation ផ្តល់ទាំងព្រំដែនខាងលើ និងខាងក្រោម (tight bound) សម្រាប់ភាពស្មុគស្មាញនៃ algorithm។'
    },
    {
        id: 20,
        question: 'តើ recursion ត្រូវការលក្ខខណ្ឌអ្វីខ្លះដើម្បីជៀសវាង infinite loop?',
        options: ['Base case', 'Recursive case', 'ទាំង base case និង recursive case',
            'មិនត្រូវការអ្វីទាំងអស់'
        ],
        correct: 2,
        explanation: 'Recursive function ត្រូវការ base case (លក្ខខណ្ឌបញ្ឈប់) និង recursive case (ការហៅខ្លួនឯងដែលខិតទៅរក base case) ដើម្បីចៀសវាង infinite loop។'
    },

    // ---- Part 3: Linked Lists, Stacks, Queues (21-35) ----
    {
        id: 21,
        question: 'តើ linked list មានអត្ថប្រយោជន៍អ្វីជាង array?',
        options: ['ចូលដំណើរការតាម index លឿនជាង', 'ប្រើអង្គចងចាំតិច',
            'បន្ថែម និងលុបធាតុនៅកណ្តាលបានលឿនជាង (O(1) ប្រសិនបើមាន pointer)',
            'ងាយស្រួលក្នុងការស្វែងរក'
        ],
        correct: 2,
        explanation: 'Linked list អនុញ្ញាតឱ្យបន្ថែម ឬលុបធាតុនៅកណ្តាលដោយគ្រាន់តែផ្លាស់ប្តូរ pointers ដែល O(1) ខណៈ array ត្រូវការផ្លាស់ទីធាតុទាំងអស់។'
    },
    {
        id: 22,
        question: 'តើ stack ដំណើរការតាមគោលការណ៍អ្វី?',
        options: ['FIFO (First In First Out)', 'LIFO (Last In First Out)', 'FILO (First In Last Out)',
            'ទាំង B និង C'
        ],
        correct: 1,
        explanation: 'Stack ដំណើរការតាម LIFO – ធាតុដែលដាក់ចូលចុងក្រោយ គឺត្រូវយកចេញមុនគេ។'
    },
    {
        id: 23,
        question: 'តើប្រតិបត្តិការអ្វីខ្លះដែលអាចធ្វើលើ stack?',
        options: ['enqueue និង dequeue', 'push និង pop', 'insert និង delete', 'append និង remove'],
        correct: 1,
        explanation: 'ប្រតិបត្តិការសំខាន់លើ stack គឺ push (ដាក់ចូល) និង pop (យកចេញ)។'
    },
    {
        id: 24,
        question: 'តើ queue ដំណើរការតាមគោលការណ៍អ្វី?',
        options: ['LIFO', 'FILO', 'FIFO', 'មិនមានចម្លើយត្រឹមត្រូវ'],
        correct: 2,
        explanation: 'Queue ដំណើរការតាម FIFO (First In First Out) – អ្នកចូលមុន គឺចេញមុន។'
    },
    {
        id: 25,
        question: 'តើអ្វីជាភាពស្មុគស្មាញនៃប្រតិបត្តិការ push លើ stack ដែលអនុវត្តដោយ linked list?',
        options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
        correct: 2,
        explanation: 'Push លើ stack (linked list) គ្រាន់តែបន្ថែម node ថ្មីនៅ head ដែល O(1)។'
    },
    {
        id: 26,
        question: 'តើអ្វីជាភាពស្មុគស្មាញនៃប្រតិបត្តិការ dequeue លើ queue ដែលអនុវត្តដោយ list (ប្រើ pop(0))?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
        correct: 2,
        explanation: '`pop(0)` លើ list ត្រូវការផ្លាស់ទីធាតុទាំងអស់ទៅឆ្វេងមួយជំហាន ដូច្នេះ O(n)។'
    },
    {
        id: 27,
        question: 'តើអ្វីជាគុណវិបត្តិនៃ singly linked list បើប្រៀបធៀបនឹង doubly linked list?',
        options: ['ប្រើអង្គចងចាំច្រើនជាង', 'មិនអាចឆ្លងកាត់ថយក្រោយ (backward traversal) បានទេ',
            'បន្ថែមធាតុយឺតជាង', 'លុបធាតុយឺតជាង'
        ],
        correct: 1,
        explanation: 'Singly linked list មានតែ pointer ទៅ next node ដូច្នេះមិនអាចឆ្លងកាត់ថយក្រោយបានទេ។'
    },
    {
        id: 28,
        question: 'តើក្នុងករណីអ្វីខ្លះដែលគួរប្រើ circular linked list?',
        options: ['ពេលដែលត្រូវការចូលដំណើរការតាម index',
            'ពេលដែលត្រូវការឆ្លងកាត់រង្វិលជុំ (round-robin scheduling)',
            'ពេលដែលត្រូវការស្វែងរកលឿន', 'ពេលដែលត្រូវការប្រើអង្គចងចាំតិច'
        ],
        correct: 1,
        explanation: 'Circular linked list ស័ក្តិសមសម្រាប់កម្មវិធីដែលត្រូវការឆ្លងកាត់ជារង្វិល ដូចជា round-robin scheduling នៅក្នុង OS។'
    },
    {
        id: 29,
        question: 'តើប្រតិបត្តិការ `peek()` លើ stack ធ្វើអ្វី?',
        options: ['យកធាតុកំពូលចេញ', 'មើលធាតុកំពូលដោយមិនលុបវា', 'បន្ថែមធាតុថ្មី',
            'លុបធាតុទាំងអស់'
        ],
        correct: 1,
        explanation: '`peek()` (ឬ `top()`) ប្រើដើម្បីមើលតម្លៃនៃធាតុកំពូលដោយមិនលុបវាចេញពី stack។'
    },
    {
        id: 30,
        question: 'តើអាចអនុវត្ត queue ដោយប្រើ stack ចំនួនប៉ុន្មាន?',
        options: ['1', '2', '3', '4'],
        correct: 1,
        explanation: 'ត្រូវការ stack យ៉ាងតិច ២ ដើម្បីអនុវត្ត queue – មួយសម្រាប់ enqueue និងមួយទៀតសម្រាប់ dequeue។'
    },
    {
        id: 31,
        question: 'តើអ្វីជាការប្រើប្រាស់ stack ក្នុងជីវិតពិត?',
        options: ['Print queue', 'Undo/Redo functionality', 'Scheduling processes',
            'Breadth-first search'
        ],
        correct: 1,
        explanation: 'Stack ប្រើសម្រាប់ Undo/Redo ក្នុងកម្មវិធីកែអត្ថបទ និង function call stack ក្នុងកម្មវិធី។'
    },
    {
        id: 32,
        question: 'តើអ្វីជាការប្រើប្រាស់ queue ក្នុងជីវិតពិត?',
        options: ['Function call stack', 'Print spooling (ម៉ាស៊ីនបោះពុម្ព)', 'Undo/Redo',
            'Expression evaluation'
        ],
        correct: 1,
        explanation: 'Queue ប្រើសម្រាប់ការគ្រប់គ្រងការបោះពុម្ព (print spooling) និងការគ្រប់គ្រងដំណើរការ (process scheduling)។'
    },
    {
        id: 33,
        question: 'តើអ្វីជាភាពស្មុគស្មាញនៃការលុប node ចុងក្រោយ (tail) ក្នុង singly linked list (មានតែ head pointer)?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
        correct: 2,
        explanation: 'ត្រូវការឆ្លងកាត់បញ្ជីទាំងមូលដើម្បីរក node មុន tail ដូច្នេះ O(n)។'
    },
    {
        id: 34,
        question: 'តើរចនាសម្ព័ន្ធទិន្នន័យអ្វីដែលស័ក្តិសមបំផុតសម្រាប់ការអនុវត្ត BFS (Breadth-First Search)?',
        options: ['Stack', 'Queue', 'Array', 'Linked List'],
        correct: 1,
        explanation: 'BFS ប្រើ queue (FIFO) ដើម្បីរក្សាទុក vertices ដែលត្រូវទស្សនាតាមលំដាប់ FIFO។'
    },
    {
        id: 35,
        question: 'តើរចនាសម្ព័ន្ធទិន្នន័យអ្វីដែលស័ក្តិសមបំផុតសម្រាប់ DFS (Depth-First Search)?',
        options: ['Queue', 'Stack', 'Priority Queue', 'Hash Table'],
        correct: 1,
        explanation: 'DFS ប្រើ stack (LIFO) ឬ recursion ដើម្បីឆ្លងកាត់តាមជម្រៅ។'
    },

    // ---- Part 4: Trees and Heaps (36-50) ----
    {
        id: 36,
        question: 'តើ binary tree មានលក្ខណៈពិសេសអ្វី?',
        options: ['ថ្នាំងនីមួយៗមានកូនយ៉ាងច្រើន ២', 'ថ្នាំងនីមួយៗមានកូនយ៉ាងច្រើន ៣',
            'ថ្នាំងទាំងអស់មានកូន ២', 'គ្មានចម្លើយត្រឹមត្រូវ'
        ],
        correct: 0,
        explanation: 'Binary tree ជាមែកធាងដែលថ្នាំងនីមួយៗមានកូនអតិបរមា ២ (left និង right)។'
    },
    {
        id: 37,
        question: 'តើអ្វីជាលំដាប់នៃ in-order traversal សម្រាប់ binary tree?',
        options: ['Root → Left → Right', 'Left → Root → Right', 'Left → Right → Root',
            'Right → Root → Left'
        ],
        correct: 1,
        explanation: 'In-order traversal ដើរ Left → Root → Right ដែលផ្តល់តម្លៃតម្រៀបសម្រាប់ BST។'
    },
    {
        id: 38,
        question: 'តើ BST (Binary Search Tree) មានលក្ខណៈសម្បត្តិអ្វី?',
        options: ['តម្លៃនៃ left subtree តូចជាង root និង right subtree ធំជាង root',
            'តម្លៃនៃ left subtree ធំជាង root', 'ថ្នាំងទាំងអស់មានតម្លៃស្មើគ្នា',
            'មិនមាន left subtree'
        ],
        correct: 0,
        explanation: 'BST មានលក្ខណៈសម្បត្តិថា left subtree មានតម្លៃតូចជាង root ហើយ right subtree មានតម្លៃធំជាង root។'
    },
    {
        id: 39,
        question: 'តើភាពស្មុគស្មាញនៃការស្វែងរកក្នុង BST (មានតុល្យភាព) គឺជាអ្វី?',
        options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'],
        correct: 1,
        explanation: 'នៅពេល BST មានតុល្យភាព កម្ពស់មែកធាងគឺ O(log n) ដូច្នេះការស្វែងរកគឺ O(log n)។'
    },
    {
        id: 40,
        question: 'តើ heap ប្រភេទណាដែល root មានតម្លៃតូចបំផុត?',
        options: ['Max Heap', 'Min Heap', 'Binary Heap', 'Fibonacci Heap'],
        correct: 1,
        explanation: 'Min Heap មានលក្ខណៈសម្បត្តិថា parent node តូចជាងកូន ដូច្នេះ root គឺជាតម្លៃតូចបំផុត។'
    },
    {
        id: 41,
        question: 'តើអ្វីជាភាពស្មុគស្មាញនៃការបញ្ចូល (insert) ធាតុក្នុង heap?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
        correct: 1,
        explanation: 'Insert ក្នុង heap ត្រូវការ heapify up ដែលមានភាពស្មុគស្មាញ O(log n) ព្រោះកម្ពស់ heap គឺ log₂(n)។'
    },
    {
        id: 42,
        question: 'តើក្បួនដោះស្រាយ heap sort មានភាពស្មុគស្មាញអ្វី?',
        options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
        correct: 1,
        explanation: 'Heap sort មានភាពស្មុគស្មាញ O(n log n) ក្នុងករណីទាំងអស់ (best, average, worst)។'
    },
    {
        id: 43,
        question: 'តើ priority queue អាចអនុវត្តបានដោយរចនាសម្ព័ន្ធទិន្នន័យអ្វី?',
        options: ['Stack', 'Queue', 'Heap', 'Linked List'],
        correct: 2,
        explanation: 'Priority queue ត្រូវបានអនុវត្តយ៉ាងមានប្រសិទ្ធភាពដោយប្រើ heap (ជាពិសេស binary heap)។'
    },
    {
        id: 44,
        question: 'តើអ្វីជាលក្ខណៈនៃ complete binary tree?',
        options: ['គ្រប់ level ត្រូវបានបំពេញលើកលែងតែ level ចុងក្រោយ',
            'គ្រប់ nodes មានកូន ២', 'កម្ពស់ស្មើនឹងចំនួន nodes', 'គ្មានចម្លើយត្រឹមត្រូវ'
        ],
        correct: 0,
        explanation: 'Complete binary tree គឺជាមែកធាងដែលគ្រប់ level ត្រូវបានបំពេញ លើកលែងតែ level ចុងក្រោយដែលត្រូវបានបំពេញពីឆ្វេងទៅស្តាំ។'
    },
    {
        id: 45,
        question: 'តើ expression tree ប្រើសម្រាប់អ្វី?',
        options: ['តំណាងឱ្យកន្សោមគណិតវិទ្យា', 'ស្វែងរកទិន្នន័យ', 'តម្រៀបទិន្នន័យ',
            'បង្ហាប់ទិន្នន័យ'
        ],
        correct: 0,
        explanation: 'Expression tree គឺជា binary tree ដែលប្រើសម្រាប់តំណាងឱ្យកន្សោមគណិតវិទ្យា (operators និង operands)។'
    },
    {
        id: 46,
        question: 'តើ pre-order traversal នៃ expression tree ផ្តល់អ្វី?',
        options: ['Infix notation', 'Postfix notation', 'Prefix notation', 'មិនមានចម្លើយត្រឹមត្រូវ'],
        correct: 2,
        explanation: 'Pre-order traversal (Root → Left → Right) នៃ expression tree ផ្តល់ prefix notation (Polish notation)។'
    },
    {
        id: 47,
        question: 'តើការលុប node ក្នុង BST មានករណីប៉ុន្មាន?',
        options: ['1', '2', '3', '4'],
        correct: 2,
        explanation: 'មាន ៣ ករណី៖ (១) គ្មានកូន, (២) មានកូន ១, (៣) មានកូន ២។'
    },
    {
        id: 48,
        question: 'តើអ្វីជាភាពស្មុគស្មាញនៃការស្វែងរក minimum ក្នុង BST?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
        correct: 1,
        explanation: 'Minimum ក្នុង BST គឺជា leftmost node ដែលអាចរកបានដោយឆ្លងកាត់ left children រហូតដល់ចប់ ដែល O(log n) សម្រាប់ BST មានតុល្យភាព។'
    },
    {
        id: 49,
        question: 'តើ heap រក្សាទុកធាតុតាមរចនាសម្ព័ន្ធអ្វី?',
        options: ['Linked List', 'Array (ជាមួយ index ចាប់ផ្តើមពី 1)', 'Stack', 'Queue'],
        correct: 1,
        explanation: 'Heap ត្រូវបានអនុវត្តដោយ array ដែលកូនរបស់ node នៅ index i គឺ 2i និង 2i+1 (ចាប់ផ្តើមពី index 1)។'
    },
    {
        id: 50,
        question: 'តើអ្វីជាគោលបំណងរបស់ heapify operation?',
        options: ['បង្កើត heap ថ្មី', 'រក្សា heap property បន្ទាប់ពីការបញ្ចូល ឬលុប',
            'តម្រៀប heap', 'លុប heap ទាំងមូល'
        ],
        correct: 1,
        explanation: 'Heapify គឺជាដំណើរការដែលប្រើដើម្បីស្ដារ heap property ឡើងវិញបន្ទាប់ពីការបញ្ចូល ឬលុបធាតុ។'
    }
];

// ============================================================
//  APP STATE
// ============================================================
const TOTAL_QUESTIONS = questions.length; // 50
const TOTAL_TIME = 60; // 60 minutes
let currentIndex = 0;
let userAnswers = new Array(TOTAL_QUESTIONS).fill(null);
let quizCompleted = false;
let timerInterval = null;
let timeRemaining = TOTAL_TIME * 60; // in seconds
let studentInfo = {
    name: '',
    id: '',
    group: '',
    shift: '',
    examDate: ''
};

// DOM refs for student form
const studentInfoDiv = document.getElementById('studentInfo');
const quizSection = document.getElementById('quizSection');
const studentForm = document.getElementById('studentForm');
const studentNameInput = document.getElementById('studentName');
const studentIDInput = document.getElementById('studentID');
const studentGroupInput = document.getElementById('studentGroup');
const studentShiftSelect = document.getElementById('studentShift');

// DOM refs for quiz
const qNumberEl = document.getElementById('qNumber');
const qTextEl = document.getElementById('qText');
const optionsContainer = document.getElementById('optionsContainer');
const explanationBox = document.getElementById('explanationBox');
const explanationText = document.getElementById('explanationText');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const retryBtn = document.getElementById('retryBtn');
const changeInfoBtn = document.getElementById('changeInfoBtn');
const downloadPDFBtn = document.getElementById('downloadPDFBtn');
const downloadExcelBtn = document.getElementById('downloadExcelBtn');
const copyTelegramBtn = document.getElementById('copyTelegramBtn');
const viewResultBtn = document.getElementById('viewResultBtn');
const progressFill = document.getElementById('progressFill');
const qCounter = document.getElementById('qCounter');
const scoreDisplay = document.getElementById('scoreDisplay');
const questionArea = document.getElementById('questionArea');
const resultBox = document.getElementById('resultBox');
const finalScore = document.getElementById('finalScore');
const gradeText = document.getElementById('gradeText');
const gradeDetail = document.getElementById('gradeDetail');
const correctCount = document.getElementById('correctCount');
const wrongCount = document.getElementById('wrongCount');
const unansweredCount = document.getElementById('unansweredCount');

// Timer elements
const timerDisplay = document.getElementById('timerDisplay');
const timerFill = document.getElementById('timerFill');
const timerOverlay = document.getElementById('timerOverlay');

// Student badge elements
const displayName = document.getElementById('displayName');
const displayID = document.getElementById('displayID');
const displayGroup = document.getElementById('displayGroup');
const displayShift = document.getElementById('displayShift');

// Result info elements
const resultName = document.getElementById('resultName');
const resultID = document.getElementById('resultID');
const resultGroup = document.getElementById('resultGroup');
const resultShift = document.getElementById('resultShift');
const resultDate = document.getElementById('resultDate');

// Toast
const toast = document.getElementById('toast');

// ============================================================
//  TOAST HELPER
// ============================================================
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ============================================================
//  DATE FORMATTER
// ============================================================
function getFormattedDate() {
    const now = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const yyyy = now.getFullYear();
    const mm = months[now.getMonth()];
    const dd = String(now.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

function getFullDate() {
    const now = new Date();
    const months = ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'];
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = months[now.getMonth()];
    const yyyy = now.getFullYear();
    return `${dd} ${mm} ${yyyy}`;
}

// ============================================================
//  STUDENT FORM HANDLER
// ============================================================
studentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = studentNameInput.value.trim();
    const id = studentIDInput.value.trim();
    const group = studentGroupInput.value.trim() || 'មិនបានបញ្ជាក់';
    const shift = studentShiftSelect.value;

    if (!name || !id) {
        alert('សូមបំពេញឈ្មោះ និងលេខសម្គាល់និស្សិត។');
        return;
    }

    studentInfo.name = name;
    studentInfo.id = id;
    studentInfo.group = group;
    studentInfo.shift = shift;
    studentInfo.examDate = getFormattedDate();

    displayName.textContent = name;
    displayID.textContent = id;
    displayGroup.textContent = group;
    displayShift.textContent = shift;

    studentInfoDiv.style.display = 'none';
    quizSection.style.display = 'block';

    resetQuizState();
    startTimer();
});

// ============================================================
//  TIMER FUNCTIONS
// ============================================================
function startTimer() {
    timeRemaining = TOTAL_TIME * 60;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            timerOverlay.classList.add('show');
            setTimeout(() => {
                timerOverlay.classList.remove('show');
                if (!quizCompleted) {
                    submitQuiz();
                }
            }, 2000);
        }
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(timeRemaining / 60);
    const secs = timeRemaining % 60;
    timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    const percent = (timeRemaining / (TOTAL_TIME * 60)) * 100;
    timerFill.style.width = `${percent}%`;

    timerFill.classList.remove('warning', 'danger');
    if (percent < 20) {
        timerFill.classList.add('danger');
        timerDisplay.classList.add('warning');
    } else if (percent < 40) {
        timerFill.classList.add('warning');
        timerDisplay.classList.add('warning');
    } else {
        timerDisplay.classList.remove('warning');
    }
}

// ============================================================
//  QUIZ FUNCTIONS
// ============================================================
function resetQuizState() {
    userAnswers.fill(null);
    quizCompleted = false;
    currentIndex = 0;
    resultBox.classList.remove('show');
    questionArea.style.display = 'block';
    timerOverlay.classList.remove('show');
    renderQuestion(0);
    explanationBox.classList.remove('show');
    const opts = optionsContainer.querySelectorAll('.option');
    opts.forEach(el => el.classList.remove('correct-answer', 'wrong-answer'));
    scoreDisplay.textContent = `ឆ្លើយរួច 0 / ${TOTAL_QUESTIONS}`;
    progressFill.style.width = '0%';
    submitBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    updateTimerDisplay();
}

function renderQuestion(index) {
    const q = questions[index];
    qNumberEl.textContent = `សំណួរទី ${index + 1}`;
    qTextEl.innerHTML = q.question;

    const letters = ['A', 'B', 'C', 'D'];
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = 'option';
        if (userAnswers[index] === i) {
            div.classList.add('selected');
        }
        div.innerHTML = `
                <span class="letter">${letters[i]}</span>
                <span class="text">${opt}</span>
            `;
        div.addEventListener('click', () => selectOption(index, i));
        optionsContainer.appendChild(div);
    });

    explanationBox.classList.remove('show');
    explanationText.textContent = '';

    prevBtn.disabled = (index === 0);
    const isLast = (index === TOTAL_QUESTIONS - 1);
    nextBtn.classList.toggle('hidden', isLast);
    submitBtn.classList.toggle('hidden', !isLast);

    const progress = ((index + 1) / TOTAL_QUESTIONS) * 100;
    progressFill.style.width = `${progress}%`;
    qCounter.textContent = `សំណួរ ${index + 1} / ${TOTAL_QUESTIONS}`;

    const answered = userAnswers.filter(a => a !== null).length;
    scoreDisplay.textContent = `ឆ្លើយរួច ${answered} / ${TOTAL_QUESTIONS}`;
}

function selectOption(index, selected) {
    if (quizCompleted) return;
    userAnswers[index] = selected;
    renderQuestion(currentIndex);
    const answered = userAnswers.filter(a => a !== null).length;
    scoreDisplay.textContent = `ឆ្លើយរួច ${answered} / ${TOTAL_QUESTIONS}`;
}

function goTo(index) {
    if (index < 0 || index >= TOTAL_QUESTIONS) return;
    currentIndex = index;
    renderQuestion(index);
}

function nextQuestion() {
    if (currentIndex < TOTAL_QUESTIONS - 1) {
        goTo(currentIndex + 1);
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        goTo(currentIndex - 1);
    }
}

// ============================================================
//  SUBMIT / RESULT
// ============================================================
function submitQuiz() {
    if (quizCompleted) return;
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    const unanswered = userAnswers.filter(a => a === null).length;
    if (unanswered > 0) {
        if (!confirm(`អ្នកមិនទាន់ឆ្លើយ ${unanswered} សំណួរ។ តើអ្នកចង់បញ្ចប់មែនទេ?`)) {
            if (!timerInterval && timeRemaining > 0) {
                startTimer();
            }
            return;
        }
    }

    quizCompleted = true;
    questionArea.style.display = 'none';
    resultBox.classList.add('show');

    let correct = 0,
        wrong = 0,
        unansweredCountVal = 0;
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
        const ans = userAnswers[i];
        if (ans === null) unansweredCountVal++;
        else if (ans === questions[i].correct) correct++;
        else wrong++;
    }
    const total = TOTAL_QUESTIONS;
    const score = Math.round((correct / total) * 100);

    resultName.textContent = studentInfo.name;
    resultID.textContent = studentInfo.id;
    resultGroup.textContent = studentInfo.group;
    resultShift.textContent = studentInfo.shift;
    resultDate.textContent = getFullDate();

    finalScore.textContent = score;
    correctCount.textContent = correct;
    wrongCount.textContent = wrong;
    unansweredCount.textContent = unansweredCountVal;

    let grade = '',
        detail = '';
    if (score >= 90) { grade = 'ពូកែ (Excellent)';
        detail = 'អស្ចារ្យ! អ្នកមានចំណេះដឹងជ្រៅជ្រះក្នុង Data Structures & Algorithms'; } else if (score >=
        75) { grade = 'ល្អ (Good)';
        detail = 'ល្អណាស់! អ្នកយល់ច្បាស់ពីគោលគំនិតសំខាន់ៗ'; } else if (score >= 50) { grade = 'មធ្យម (Average)';
        detail = 'គួរតែត្រួតពិនិត្យឡើងវិញនូវផ្នែកដែលអ្នកខ្សោយ'; } else { grade = 'ត្រូវការកែលម្អ (Needs Improvement)';
        detail = 'សូមអានសៀវភៅឡើងវិញ និងអនុវត្តកូដបន្ថែមទៀត។'; }
    gradeText.textContent = grade;
    gradeDetail.textContent = detail;
}

// ============================================================
//  DOWNLOAD EXCEL (CSV)
// ============================================================
function downloadExcel() {
    const name = studentInfo.name;
    const id = studentInfo.id;
    const group = studentInfo.group;
    const shift = studentInfo.shift;
    const date = studentInfo.examDate || getFormattedDate();
    const score = document.getElementById('finalScore').textContent;

    const headers = ['ID', 'ឈ្មោះ', 'ក្រុម', 'វេន', 'កាលបរិច្ឆេទប្រឡង', 'ពិន្ទុប្រឡង'];
    const row = [id, name, group, shift, date, score];

    let csvContent = headers.join(',') + '\n';
    csvContent += row.join(',') + '\n';

    // Extra rows for multiple attempts tracking
    for (let i = 1; i <= 2; i++) {
        const attemptRow = [`${id}-${i}`, name, group, shift, date, ''];
        csvContent += attemptRow.join(',') + '\n';
    }

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `លទ្ធផលប្រឡង_${id}_${studentInfo.examDate}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);

    showToast('📊 បានទាញយក Excel ជោគជ័យ!');
}

// ============================================================
//  PDF GENERATION
// ============================================================
function downloadPDF() {
    const element = document.getElementById('resultBox');
    html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 190;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        doc.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
        doc.save(`លទ្ធផលប្រឡង_${studentInfo.id}.pdf`);
        showToast('📥 បានទាញយក PDF ជោគជ័យ!');
    }).catch(err => {
        alert('មានបញ្ហាក្នុងការបង្កើត PDF។ សូមព្យាយាមម្តងទៀត។');
        console.error(err);
    });
}

// ============================================================
//  COPY TO TELEGRAM
// ============================================================
function copyTelegram() {
    const name = studentInfo.name;
    const id = studentInfo.id;
    const group = studentInfo.group;
    const shift = studentInfo.shift;
    const date = getFullDate();
    const score = document.getElementById('finalScore').textContent;
    const correct = document.getElementById('correctCount').textContent;
    const wrong = document.getElementById('wrongCount').textContent;
    const unanswered = document.getElementById('unansweredCount').textContent;

    const text =
        `📊 *លទ្ធផលប្រឡង DSA* 📊\n\n` +
        `👤 ឈ្មោះ: ${name}\n` +
        `🆔 ID: ${id}\n` +
        `📁 ក្រុម: ${group}\n` +
        `⏰ វេន: ${shift}\n` +
        `📅 កាលបរិច្ឆេទ: ${date}\n\n` +
        `🏆 ពិន្ទុសរុប: ${score} / 100\n` +
        `✅ ត្រឹមត្រូវ: ${correct}\n` +
        `❌ ខុស: ${wrong}\n` +
        `⬜ មិនទាន់ឆ្លើយ: ${unanswered}\n\n` +
        `⏱ រយៈពេលប្រឡង: ៦០ នាទី`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('📋 ចម្លងជោគជ័យ! សូមបិទភ្ជាប់ (Paste) ទៅកាន់ Telegram.');
        }).catch(() => {
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showToast('📋 ចម្លងជោគជ័យ! សូមបិទភ្ជាប់ (Paste) ទៅកាន់ Telegram.');
    } catch (err) {
        alert('សូមចម្លងដោយដៃ៖ \n\n' + text);
    }
    document.body.removeChild(textarea);
}

// ============================================================
//  RESET / RETRY / CHANGE INFO
// ============================================================
function resetQuiz() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    timerOverlay.classList.remove('show');
    resetQuizState();
    startTimer();
}

function goBackToInfo() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    timerOverlay.classList.remove('show');
    studentInfoDiv.style.display = 'block';
    quizSection.style.display = 'none';
    userAnswers.fill(null);
    quizCompleted = false;
}

// ============================================================
//  EVENT LISTENERS
// ============================================================
prevBtn.addEventListener('click', prevQuestion);
nextBtn.addEventListener('click', nextQuestion);
submitBtn.addEventListener('click', submitQuiz);
resetBtn.addEventListener('click', resetQuiz);
retryBtn.addEventListener('click', resetQuiz);
changeInfoBtn.addEventListener('click', goBackToInfo);
downloadPDFBtn.addEventListener('click', downloadPDF);
downloadExcelBtn.addEventListener('click', downloadExcel);
copyTelegramBtn.addEventListener('click', copyTelegram);
viewResultBtn.addEventListener('click', function() {
    timerOverlay.classList.remove('show');
    if (!quizCompleted) {
        submitQuiz();
    }
});

document.addEventListener('keydown', (e) => {
    if (quizCompleted) return;
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextQuestion();
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevQuestion();
    }
});

// ============================================================
//  INIT
// ============================================================
// Ensure DOM is fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', function() {
    studentInfoDiv.style.display = 'block';
    quizSection.style.display = 'none';
});