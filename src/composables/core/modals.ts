import { ref } from 'vue'
import { useModal } from './modal'
import Logout from '@/components/modals/logout.vue'
import LoginAlert from '@/components/modals/loginAlert.vue'
import DefaultVerification from '@/components/modals/verification/default.vue'
import VerifyPayment from '@/components/modals/verification/Payment.vue'
import MobileSidebar from '@/components/sidebars/main/MobileSidebar.vue'
import CreateTask from '@/components/modals/tasks/create/index.vue'
import EditTask from '@/components/modals/tasks/edit/index.vue'
import AdminDeleteTask from '@/components/modals/admin/task/Delete.vue'
import AdminCancelOffer from '@/components/modals/admin/task/offer/Cancel.vue'
import DeleteTask from '@/components/modals/tasks/Delete.vue'
import FlagTask from '@/components/modals/tasks/Flag.vue'
import MakeOffer from '@/components/modals/tasks/offer/MakeOffer.vue'
import DeclineOffer from '@/components/modals/tasks/offer/DeclineOffer.vue'
import CancelOffer from '@/components/modals/tasks/offer/CancelOffer.vue'
import AcceptOffer from '@/components/modals/tasks/offer/AcceptOffer.vue'
import SocialShare from '@/components/modals/core/SocialShare.vue'
import ShopMobileSidebar from '@/components/sidebars/shop/MobileSidebar.vue'
import ServiceMobileSidebar from '@/components/sidebars/service/MobileSidebar.vue'
import Referral from '@/components/modals/core/Referral.vue'
import CreateService from '@/components/modals/core/CreateService.vue'
import CreateShop from '@/components/modals/core/CreateShop.vue'
import RequestPayment from '@/components/modals/tasks/offer/RequestPayment.vue'
import PaymentRequest from '@/components/modals/tasks/offer/PaymentRequest.vue'
import FundWallet from '@/components/modals/wallets/FundWallet.vue'
import SendMoney from '@/components/modals/wallets/SendMoney/index.vue'
import ApproveEscrow from '@/components/modals/wallets/escrow/Approve.vue'
import NudgeEscrow from '@/components/modals/wallets/escrow/Nudge.vue'
import AddCustomer from '@/components/modals/shops/customers/Add.vue'
import AddShopCategory from '@/components/modals/shops/categories/Add.vue'
import CategoryShopCount from '@/components/modals/shops/categories/Count.vue'
import DeleteShopCategory from '@/components/modals/shops/categories/Delete.vue'
import AddServiceCategory from '@/components/modals/services/categories/Add.vue'
import CategoryServiceCount from '@/components/modals/services/categories/Count.vue'
import DeleteServiceCategory from '@/components/modals/services/categories/Delete.vue'
import DeleteProduct from '@/components/modals/shops/products/Delete.vue'
import AddShowcase from '@/components/modals/services/showcase/create/index.vue'
import DeleteShowcase from '@/components/modals/services/showcase/Delete.vue'
import MainBottomMenu from '@/components/modals/navigation/bottombar/main.vue'
import ShopBottomMenu from '@/components/modals/navigation/bottombar/shop.vue'
import ServiceBottomMenu from '@/components/modals/navigation/bottombar/service.vue'
import AddServiceBooking from '@/components/modals/services/bookings/Add.vue'

type AuthTypes = 'Logout' | 'DefaultVerification' | 'LoginAlert'
type AdminTypes = 'AdminDeleteTask' | 'AdminCancelOffer'
type PaymentTypes = 'VerifyPayment' | 'RequestPayment' | 'PaymentRequest'
type SidebarTypes = 'MobileSidebar' | 'ShopMobileSidebar' | 'ServiceMobileSidebar'
type BottombarTypes = 'MainBottomMenu' | 'ShopBottomMenu' | 'ServiceBottomMenu'
type TaskTypes = 'CreateTask' | 'DeleteTask' | 'FlagTask' | 'EditTask'
type OfferTypes = 'MakeOffer' | 'DeclineOffer' | 'AcceptOffer' | 'CancelOffer'
type CoreTypes = 'SocialShare' | 'Referral' | 'CreateService' | 'CreateShop'
type WalletTypes = 'FundWallet' | 'SendMoney' | 'ApproveEscrow' | 'NudgeEscrow'
type ShopsTypes = 'AddCustomer' | 'AddShopCategory' | 'DeleteProduct' | 'DeleteShopCategory' | 'CategoryShopCount'
type ServicesTypes = 'AddShowcase' | 'DeleteShowcase' | 'AddServiceCategory' | 'CategoryServiceCount' | 'DeleteServiceCategory'| 'AddServiceBooking'

const AuthModals = { Logout, DefaultVerification, LoginAlert } as Record<AuthTypes, any>
const AdminModals = { AdminDeleteTask, AdminCancelOffer } as Record<AdminTypes, any>
const PaymentModals = { VerifyPayment, RequestPayment, PaymentRequest } as Record<PaymentTypes, any>
const SidebarModals = { MobileSidebar, ShopMobileSidebar, ServiceMobileSidebar } as Record<SidebarTypes, any>
const BottombarModals = { MainBottomMenu, ShopBottomMenu, ServiceBottomMenu } as Record<BottombarTypes, any>
const TaskModals = { CreateTask, DeleteTask, FlagTask, EditTask } as Record<TaskTypes, any>
const OfferModals = { MakeOffer, DeclineOffer, AcceptOffer, CancelOffer } as Record<OfferTypes, any>
const CoreModals = { SocialShare, Referral, CreateService, CreateShop } as Record<CoreTypes, any>
const WalletModals = { FundWallet, SendMoney, ApproveEscrow, NudgeEscrow } as Record<WalletTypes, any>
const shopModals = { AddCustomer, AddShopCategory, DeleteProduct, DeleteShopCategory, CategoryShopCount } as Record<ShopsTypes, any>
const servicesModals = { AddShowcase, DeleteShowcase, AddServiceCategory, CategoryServiceCount, DeleteServiceCategory, AddServiceBooking } as Record<ServicesTypes, any>

export const modal = useModal()
const authModal = modal.register('Auth', AuthModals)
const adminModal = modal.register('Admin', AdminModals)
const paymentModal = modal.register('Payment', PaymentModals)
const sidebarModal = modal.register('Sidebar', SidebarModals)
const bottombarModal = modal.register('Bottombar', BottombarModals)
const taskModal = modal.register('Task', TaskModals)
const coreModal = modal.register('Core', CoreModals)
const offerModal = modal.register('Offer', OfferModals)
const walletModal = modal.register('Wallet', WalletModals)
const shopModal = modal.register('Shop', shopModals)
const servicesModal = modal.register('Services', servicesModals)

export const useAuthModal = () => authModal
export const useAdminModal = () => adminModal
export const usePaymentModal = () => paymentModal
export const useSidebarModal = () => sidebarModal
export const useBottombarModal = () => bottombarModal
export const useTaskModal = () => taskModal
export const useCoreModal = () => coreModal
export const useOfferModal = () => offerModal
export const useWalletModal = () => walletModal
export const useShopModal = () => shopModal
export const useServiceModal = () => servicesModal
