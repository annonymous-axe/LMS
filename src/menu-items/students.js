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
            url: '/admin/home',
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
                    url: '/batches'
                },
                {
                    id: 'courses',
                    title: 'Courses',
                    type: 'item',
                    url: '/courses'
                },
                {
                    id: 'assignments',
                    title: 'Assignments',
                    type: 'item',
                    url: '/assignments'
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
                    url: '/batches'
                },
                {
                    id: 'courses',
                    title: 'Courses',
                    type: 'item',
                    url: '/courses'
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
                    url: '/receipts'
                },
                {
                    id: 'certificate',
                    title: 'Certificate',
                    type: 'item',
                    url: '/certificates'
                }
            ] 
        }
    ]
};

export default students;