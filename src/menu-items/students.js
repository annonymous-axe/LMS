import { IconAddressBook, IconVocabulary, IconBrandTabler, IconReceipt, IconCertificate } from '@tabler/icons-react'

const icons = {IconVocabulary, IconBrandTabler, IconReceipt, IconCertificate}

const students = {
    id: 'student-links',
    type: 'group',
    children: [
        {
            id: 'batches',
            title: 'Batches',
            type: 'item',
            url: '/batches',
            icon: icons.IconVocabulary
        },
        {
            id: 'courses',
            title: 'Courses',
            type: 'item',
            url: '/courses',
            icon: icons.IconBrandTabler
        },
        {
            id: 'receipt',
            title: 'Fee Receipt',
            type: 'item',
            url: '/receipts',
            icon: icons.IconReceipt
        },
        {
            id: 'certificate',
            title: 'Certificate',
            type: 'item',
            url: '/certificates',
            icon: icons.IconCertificate
        }
    ]
};

export default students;