import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
import { Colors } from "./Colors";

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 16 * 5) / 2;
const cardHeight = cardWidth / 1.7;


export const s_global = StyleSheet.create({
    Setting_Section: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        marginBottom: 16,
    },
    Input_Underline: {
        width: 80,
        textAlign: 'right',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 2,
        marginRight: 30,
    },
    Text12: {
        fontSize: 12,
        color: '#999',
        textAlign: 'center',
        marginBottom: 12,
    },

    Setting_SectionTitle: {
        fontSize: 13,
        fontWeight: '600',
        color: '#3B82F6',
        marginBottom: 8,
    },
    Setting_VersionText: {
        textAlign: 'center',
        color: '#9CA3AF',
        fontSize: 13,
        marginBottom: 20,
    },
    TestContainer: {
        flexGrow: 1,
        padding: 24,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },



    DropdownButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fff',
        marginTop: 8,
    },
    DropdownText: {
        fontSize: 16,
        color: '#333',
    },
    ChocolateCard: {
        width: cardWidth,
        height: cardHeight,
        borderRadius: 12,
        marginBottom: -10,
        padding: 18,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F8F9FB', // closer match to screenshot
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, // added for iOS shadow
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2, // subtle Android shadow
    },

    GreyCard: {
        flex: 1,
        backgroundColor: "#f8f8f8",
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },


    Text888: {
        marginLeft: 8,
        fontSize: 16,
        color: '#888',
        flex: 1, // make the text take the middle space
    },

    DrawerFooter: {
        marginTop: 'auto',
        padding: 16,
        borderTopWidth: 1,
        borderColor: '#eee',
    },

    SettingsContainer: {
        flex: 1,
        backgroundColor: '#F6F9FB',
        padding: 16,
    },


    SettingsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    SettingsItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingLeft: 20,
    },

    ScrollViewContainer: {
        padding: 16,
        paddingBottom: 100
    },

    Container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        paddingHorizontal: 10,
        paddingTop: 2,
    },
    Drawer_Container: {
        flex: 1,
        backgroundColor: Colors.statusBarLight,
    },
    Drawer_Header: {
        backgroundColor: Colors.statusBarLight,
        marginHorizontal: -60, // override drawer padding
        marginTop: -45,
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    DrawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        color: '#888',
    },

    PlanCard_greyborder: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginVertical: 6,
        marginHorizontal: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 16,
        borderColor: "#ddd",
        borderWidth: 1,
    },


    Card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginVertical: 6,
        marginHorizontal: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    Label: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
        marginBottom: 3,
    },
    slimInputRight: {
        textAlign: "right",
        color: "#aaa",
        paddingVertical: 2, // same vertical space as date text
    },
    Label_BoldLeft_RegularRight: {
        flex: 1,
        fontSize: 16,
        fontWeight: "600",
        overflow: 'hidden',
    },

    Label_NormalLeft_GreyRight: {
        flex: 1,
        fontSize: 16,
        overflow: 'hidden',
    },

    Content_Left_Right: {
        flex: 1,
        fontSize: 14,
        color: "#888",
        overflow: 'hidden',
    },

    Content: {
        fontSize: 14,
        color: "#888",
    },
    EmptyText: {
        fontSize: 16,
        color: "#999",
        marginTop: 40,
        textAlign: "center",
    },
    EmptyInvList: {
        flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20
    },
    emptyList: {
        flexGrow: 1,
        justifyContent: 'center'
    },

    InputRightAAA:
        { color: "#aaa", textAlign: "right" },

    InputGreyBackground: {
        backgroundColor: "#f2f2f2",
        color: "#666",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },

    InputUnderline: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        fontSize: 16,
        paddingVertical: 8,
        color: '#888',
        backgroundColor: 'transparent',
    },

    InputText: {
        paddingVertical: 2,
        color: "#aaa",
    },
    PlanView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 4,
    },

    FABSquare: {
        position: 'absolute',
        bottom: 50,
        right: 20,
        backgroundColor: "#F28500",
        borderRadius: 20,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },



    ErrorOverlay: {
        flex: 1,
        backgroundColor: '#000000aa',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    ErrorTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    ErrorMsg: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    },


    SummaryLabel: {
        color: '#888',
        fontSize: 14,
        fontWeight: 'bold',
    },
    SummaryValue: {
        color: '#888',
        fontSize: 18,
        fontWeight: 'bold',
    },

    FilterTab: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        marginRight: 6
    },
    FilterTabSelected: {
        backgroundColor: '#F28500',
    },
    FilterTabText: {
        color: '#555',
        fontSize: 13,
        fontWeight: '500',
    },
    FilterTabTextSelected: {
        color: 'white',
    },
    FilterButton: {
        width: 40,
        height: 40,
        backgroundColor: '#90CAF9',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },


    DatePickerButton: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 4,
        width: '48%',
        flexDirection: 'row', // Default row direction
        alignItems: 'center', // Center vertically both the icon and text
        justifyContent: 'space-between', // Push icon to the right end
    },


    Divider: {
        borderBottomWidth: 1, borderColor: '#ddd', marginVertical: 18
    },

    Picker: {
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "#f4f4f4",
        borderWidth: 1,
        borderColor: "#ccc",
        height: 48,
        justifyContent: "center",
        marginTop: 4
    },


    DeleteBox: {
        width: 24, height: 24, borderRadius: 4, borderWidth: 1, borderColor: "#ccc", justifyContent: "center", alignItems: "center", marginRight: 12
    },


























    listContainer: {
        flex: 1, // This will make the list take all remaining space
    },
    modal_card: {
        position: 'absolute',
        top: '35%',
        alignSelf: 'center',
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingVertical: 24,
        paddingHorizontal: 20,
        elevation: 4,
    },

    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        width: '90%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    modalSection: {
        marginBottom: 20,
        width: '100%',
    },
    modalLabel: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
    modalPicker: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        marginTop: 8,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 8,
    },


    modalActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },


    buttonGroup: {
        marginBottom: 22,
        gap: 12,
    },

    button: {
        backgroundColor: '#4D96FF',
        padding: 12,
        borderRadius: 4,
        marginVertical: 4,
        width: '48%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },


    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    smodalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        width: '80%',
    },

    modalFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },

    cancelButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
    },

    applyButton: {
        backgroundColor: '#007bff',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        alignSelf: 'flex-end',
    },

    ModalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    ModalContent: {
        width: "90%",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
    },
    ModalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    ModalTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    Input: {
        backgroundColor: "#f2f2f2",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 16,
    },

    Subtitle: {
        fontSize: 16,
        color: "#666",
        margin: 20,
    },
    Item: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    Icon: {
        width: 32,
        alignItems: "center",
    },
    Support_Label: {
        fontSize: 16,
        marginLeft: 12,
        color: "#333",
    },
    Note: {
        marginTop: 30,
        fontSize: 14,
        color: "#999",
        textAlign: "center",
    },


    Delete_View: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        backgroundColor: "#f5f5f5",
        padding: 12,
        borderRadius: 8,
    },

    Delete_TouchableOpacity: {
        width: 24,
        height: 24,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },

    //     Input: {
    //   padding: 12,
    //   backgroundColor: "white",
    //   borderRadius: 8,
    //   marginBottom: 10,
    // },


    ButtonText: {
        color: "white",
        fontWeight: "bold",
    },

    ButtonContinueText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },

    ButtonContinueContainer: {
        marginTop: 12,
        backgroundColor: "#f28500",
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: "center",
    },

    Link: {
        color: "#007AFF",
        textAlign: "center",
        marginTop: 10,
    },

    deleteButtonContainer: {
        height: '100%',
        justifyContent: 'center',
        paddingVertical: 8, // Match your card padding
    },
    deleteButton: {
        backgroundColor: '#f44336', // Material Design red
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50, // Fixed height for better consistency
        borderRadius: 8,
        marginVertical: 8, // Space from top/bottom
        marginRight: 16,
        alignSelf: 'center', // This centers vertically in parent
        position: 'relative', // Helps with precise positioning
        top: 0, // Reset any potential offset
        right: 8, // Reset any potential offset
        shadowColor: '#d32f2f', // Slightly darker red shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4, // Android shadow
        transform: [{ scale: 0.95 }],
        opacity: 0.9,
    },
    // In your renderRightActions:
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    arrow: {
        fontSize: 18,
        color: '#9CA3AF',
        marginLeft: 12,
    },

    drawer_title: {
        fontSize: 16,
        color: '#111827',
    },
    drawer_subtitle: {
        fontSize: 14,
        color: '#6B7280',
        marginTop: 2,
    },

});


export const modalStyles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'flex-end',
        padding: 20,
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 16,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        maxHeight: '70%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    itemRow: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    addNewButton: {
        marginTop: 16,
        flexDirection: 'row',
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addNewButton2: {
        marginTop: 16,
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addNewText: {
        color: '#fff',
        marginLeft: 6,
        fontWeight: 'bold',
    },
    closeButton: {
        marginTop: 12,
        alignItems: 'center',
    },
    confirmButton: {
        backgroundColor: '#007aff',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    confirmButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});




export const s_global_template = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 18,
        marginTop: 8,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    templateLabel: {
        fontSize: 16,
        fontWeight: '500',
    },
    closeBtn: {
        marginTop: 16,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#eee',
        borderRadius: 10,
    },
    closeText: {
        fontSize: 16,
    },
    templateBox: {
        width: '47%',
        aspectRatio: 1 / 1.414,
        // height: 180,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#f1f1f1',
        marginHorizontal: '1%',
        justifyContent: 'center',
        // alignItems: 'center',        this is the key issue
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        position: 'relative',
    },

});


export const invoiceStyles = StyleSheet.create({
    sectionBox: {
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 16,
        paddingRight: 6,
        alignItems: 'center',
        marginBottom: 16,
    },
    addText: {
        color: '#4CAF50',
        fontWeight: 'bold',
    },
    invoiceInfoBox: {
        borderTopWidth: 1,
        borderColor: '#ccc',
        paddingTop: 16,
        marginTop: 8,
    },
    invoiceInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    value: {
        fontWeight: 'bold',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },

    inputText: {
        paddingVertical: 2,
        color: "#aaa",
    },
    logoBox: {
        width: 150,
        height: 100,
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'dashed',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addClientBox: {
        height: 40,
        maxHeight: 120,
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'dashed',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        overflow: 'hidden',
    },
    smallInfoText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'right',
    },
    smallText: {
        fontSize: 12,
        color: '#666',
        textAlign: 'left',
        marginBottom: 12,
    },
    clientName: {
        fontWeight: "bold",
        fontSize: 12,
        marginBottom: 2,
    },

    clientDetail: {
        fontSize: 12,
        color: "#555",
        lineHeight: 18,
    },
    Card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

});
