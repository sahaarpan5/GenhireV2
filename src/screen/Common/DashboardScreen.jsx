import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    TouchableOpacity,
    Image,
    ImageBackground,
} from "react-native";

const stats = [
    { id: "1", label: "Job Posting", count: 9, color: "#8E44AD" },
    { id: "2", label: "Selection", count: 8, color: "#27AE60" },
    { id: "3", label: "Joining", count: 6, color: "#3498DB" },
    { id: "4", label: "Joining Status", count: 2, color: "#E67E22" },
];

const jobs = [
    {
        id: "1",
        title: "Java Developer",
        stats: [
            { key: "vacancy", label: "Vacancy", value: 15 },
            { key: "selection", label: "Selection", value: 3 },
            { key: "joining", label: "Joining", value: 2 },
           
        ],
    },
    {
        id: "2",
        title: "Dot Net Developer",
        stats: [
            { key: "vacancy", label: "Vacancy", value: 15 },
            { key: "selection", label: "Selection", value: 3 },
            { key: "joining", label: "Joining", value: 2 },
           
        ],
    },
    {
        id: "3",
        title: "Python Developer",
        stats: [
            { key: "vacancy", label: "Vacancy", value: 15 },
            { key: "selection", label: "Selection", value: 3 },
            { key: "joining", label: "Joining", value: 2 },
            
        ],
    },
];

const DashboardScreen = () => {
    const renderJob = ({ item }) => (
        <TouchableOpacity style={styles.jobCard}>
            <View style={styles.jobHeader}>
                <Text style={styles.jobTitle}>{item.title}</Text>
                <Text style={styles.menu}>⋯</Text>
            </View>

            <View style={styles.jobMeta}>
                <Text style={styles.metaText}>● Full Time</Text>
                <Text style={styles.metaText}>📍 Kolkata</Text>
                <Text style={styles.metaText}>💼 Onsite</Text>
            </View>

            <View style={styles.divider} />

            < View style={styles.statRow}>
                {item.stats
                    ?.filter(s => s.value !== null && s.value !== undefined)
                    .map((s, index) => (
                        <Text key={s.key} style={styles.jobStats}>
                            {s.value} {s.label}
                            {index !== item.stats.length - 1 && "  •  "}
                        </Text>
                    ))}
            </View>
        </TouchableOpacity >
    );

    return (
        <View style={styles.container}>
            {/* HEADER */}
            <ImageBackground
                source={require("../../asset/heade-bg.png")} // 👈 full UI image
                style={styles.headerBackground}
                resizeMode="cover"
            >
                <View style={styles.header}>
                    <View style={styles.headerRow}>

                        <Image
                            source={{
                                uri: "https://randomuser.me/api/portraits/men/1.jpg",
                            }}
                            style={styles.avatar}
                        />
                        <Text style={styles.headerText}>Hello, User!</Text>
                    </View>
                </View>
            </ImageBackground>


            {/* SEARCH */}
            <View style={styles.searchRow}>
                <View style={styles.searchInput}>
                    <Image source={require("../../asset/search-icon.png")} style={{ width: 16, height: 16, marginRight: 8 }} />
                    <TextInput
                        placeholder="Search"
                        style={styles.inputContainer}
                        placeholderTextColor="#777"
                    />
                </View>

                <TouchableOpacity style={styles.filterBtn}>
                    <Image source={require("../../asset/filter.png")} style={{ width: 16, height: 16 }} />
                </TouchableOpacity>
            </View>

            {/* STATS */}
            <View style={styles.statsRow}>
                {stats.map((item) => (
                    <View key={item.id} style={styles.statCard}>
                        <View
                            style={[
                                styles.statCircle,
                                { borderColor: item.color },
                            ]}
                        >
                            <Text style={[styles.statNumber, { color: item.color }]}>
                                {item.count}
                            </Text>
                        </View>
                        <Text style={styles.statLabel}>{item.label}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.card} >
                <View style={styles.jobHeaderRow}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center' }}>
                        <Text style={styles.jobOpenings}>
                            Job Openings
                        </Text>
                        <Text style={styles.badge}>9</Text>
                    </View>


                    <TouchableOpacity style={styles.addBtn}>
                        <Text style={styles.addBtnText}>+ Add Job Post</Text>
                    </TouchableOpacity>
                </View>

                {/* JOB LIST */}
                <FlatList
                    data={jobs}
                    keyExtractor={(item) => item.id}
                    renderItem={renderJob}
                    contentContainerStyle={{ paddingVertical: 20 }}
                />

                {/* VIEW MORE */}
                <TouchableOpacity style={styles.viewMore}>
                    <Text style={styles.viewMoreText}>View More</Text>
                </TouchableOpacity>
            </View>

            {/* JOB HEADER */}

        </View>
    );
};

export default DashboardScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ebe5e5",
    },

    header: {
        padding: 20,

    },

    headerRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    avatar: {
        width: 60,
        height: 60,
        borderRadius: 40,
        marginRight: 10,
    },

    headerText: {
        fontSize: 22,
        fontWeight: "600",
        color: "#000",
    },

    searchRow: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center",


    },

    searchInput: {
        borderWidth: 1,
        borderColor: '#e6e6e6',
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 40,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputContainer: {
        color: '#000'
    },

    filterBtn: {
        width: 50,
        marginLeft: 10,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 8,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: '#e6e6e6',
        alignContent: 'center',
        alignItems: 'center'
    },

    statsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginVertical: 10,
    },

    statCard: {
        flex: 1,
        marginHorizontal: 5,
        padding: 10,
        borderRadius: 10,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: '#e6e6e6',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
    },

    statCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 5,
        justifyContent: "center",
        alignItems: "center",
    },

    statNumber: {
        fontWeight: "600",

    },

    statLabel: {
        fontSize: 12,
        marginTop: 5,
        fontSize: 12,
        textAlign: "center",
        color: "#0a0a0a",
    },

    jobHeaderRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        alignItems: "center",
    },

    jobOpenings: {
        fontSize: 14,
        fontWeight: "600",
        color: '#0a0a0a',
        marginLeft: 5
    },

    badge: {
        backgroundColor: "#023d9b",
        color: "#fff",
        borderRadius: 20,
        fontSize: 16,
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        height: 24,
        width: 24,
        marginLeft: 5
    },

    addBtn: {
        borderWidth: 1,
        borderColor: "#6a11cb",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 6,
    },

    addBtnText: {
        color: "#6a11cb",
    },

    jobCard: {
        backgroundColor: "#fff",
        margin: 10,
        padding: 15,
        borderRadius: 10,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: '#e6e6e6',
    },

    jobHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    jobTitle: {
        fontWeight: "600",
        fontSize: 16,
        color: "#000"
    },

    menu: {
        fontSize: 18,
        fontWeight: "600",
        color: "#000"

    },

    jobMeta: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    },

    metaText: {
        fontSize: 12,
        color: "#111111",
        fontWeight: 600
    },

    divider: {
        height: 1,
        backgroundColor: "#ddd",
        marginVertical: 10,
    },

    jobStats: {
        fontSize: 12,
        color: "#1a1a1a",
    },

    viewMore: {
        alignSelf: "center",
        backgroundColor: "#4f46e5",
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 8,
        marginBottom: 10,
    },

    viewMoreText: {
        color: "#fff",
    },
    headerBackground: {
        width: '100%',
        height: 100,
    },
    card: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 10,
        marginTop: 8,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: '#e6e6e6',
        height: '67%'

    },
    statRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 6,
    },

   
});