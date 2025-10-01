import {
    IconAddressBook,
    IconDashboard,
    IconVocabulary,
    IconBrandTabler,
    IconReceipt, 
    IconCertificate,
    IconBrandAppgallery,
    IconBooks,
    IconAppsFilled
} from '@tabler/icons-react'

const icons = {IconAppsFilled, IconVocabulary, IconBrandTabler, IconReceipt, IconCertificate, IconDashboard, IconBrandAppgallery, IconBooks}

const students = {
    id: 'student-links',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/home',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'mylibrary',
            title: 'My Library',
            icon: icons.IconBooks,
            type: 'collapse',
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
            ] 
        },           
        {
            id: 'products',
            title: 'Products',
            icon: icons.IconBrandAppgallery,
            type: 'collapse',
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
            ] 
        },
        {
            id: 'utility',
            title: 'Utility',
            icon: icons.IconAppsFilled,
            type: 'collapse',
            children: [
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
        }
    ]
};

export default students;