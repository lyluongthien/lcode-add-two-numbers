/**
 * https://leetcode.com/submissions/detail/658405768
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const l1 = new ListNode(9, new ListNode(9, new ListNode(9)))
const l2 = new ListNode(9, new ListNode(9))

const result = new ListNode(8, new ListNode(0, new ListNode(7)))

function print(ln: ListNode | null, str: string = ''): string {
    if (ln) {
        str += ln.val;
        if (ln.next) return print(ln.next, str);
    }
    return str
}



function reverseList(head: ListNode | null): ListNode | null {
    let previous = null;
    while (head !== null) {
        let next = head.next;
        head.next = previous;
        previous = head
        head = next;
    }
    return previous;
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1) return l2;
    if (!l2) return l1;
    let result = new ListNode(0, null);
    const resultHead = result;
    let head1: ListNode | null = l1;
    let head2: ListNode | null = l2
    let carry = 0
    while (head1 || head2) {
        result.val = (head1?.val ? head1?.val : 0) + (head2?.val ? head2?.val : 0) + carry
        if (result.val > 9) {
            carry = 1;
            result.val = result.val - 10
        } else {
            carry = 0
        }
        head1 = (head1?.next) ? head1.next : null;
        head2 = (head2?.next) ? head2.next : null;
        if (head1 || head2 || carry) {
            result.next = new ListNode(carry, null);
            result = result.next
        }
    }
    return resultHead
};

console.log("out", print(addTwoNumbers(l1, l2)))
