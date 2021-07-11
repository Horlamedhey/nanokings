export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar type represents a DateTime. The DateTime is serialized as an RFC 3339 quoted string */
  DateTime: any;
  ObjectId: any;
};

export type BankAccount = {
  __typename?: 'BankAccount';
  _id?: Maybe<Scalars['ObjectId']>;
  accountName?: Maybe<Scalars['String']>;
  accountNumber?: Maybe<Scalars['String']>;
  bankCode?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BankAccountInsertInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  accountName?: Maybe<Scalars['String']>;
  accountNumber?: Maybe<Scalars['String']>;
  bankCode?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BankAccountQueryInput = {
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  accountName_lte?: Maybe<Scalars['String']>;
  accountName_gte?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  accountNumber_gte?: Maybe<Scalars['String']>;
  bankCode?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  accountNumber_lte?: Maybe<Scalars['String']>;
  updatedAt_ne?: Maybe<Scalars['DateTime']>;
  bankName_gte?: Maybe<Scalars['String']>;
  accountNumber?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  accountName_lt?: Maybe<Scalars['String']>;
  bankCode_exists?: Maybe<Scalars['Boolean']>;
  accountNumber_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  accountNumber_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  createdAt_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  accountNumber_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  accountName?: Maybe<Scalars['String']>;
  bankName_lt?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  bankCode_ne?: Maybe<Scalars['String']>;
  bankName_exists?: Maybe<Scalars['Boolean']>;
  updatedAt_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_exists?: Maybe<Scalars['Boolean']>;
  bankCode_lte?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  bankCode_gt?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  accountNumber_gt?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<BankAccountQueryInput>>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  OR?: Maybe<Array<BankAccountQueryInput>>;
  accountName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  bankName_gt?: Maybe<Scalars['String']>;
  bankCode_lt?: Maybe<Scalars['String']>;
  bankCode_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  bankCode_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  bankName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  bankName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_ne?: Maybe<Scalars['DateTime']>;
  bankCode_gte?: Maybe<Scalars['String']>;
  bankName_ne?: Maybe<Scalars['String']>;
  accountName_ne?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  bankName_lte?: Maybe<Scalars['String']>;
  accountName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_exists?: Maybe<Scalars['Boolean']>;
  accountName_gt?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  accountNumber_exists?: Maybe<Scalars['Boolean']>;
  accountName_exists?: Maybe<Scalars['Boolean']>;
  accountNumber_ne?: Maybe<Scalars['String']>;
};

export enum BankAccountSortByInput {
  AccountnumberAsc = 'ACCOUNTNUMBER_ASC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  IdDesc = '_ID_DESC',
  AccountnameAsc = 'ACCOUNTNAME_ASC',
  AccountnumberDesc = 'ACCOUNTNUMBER_DESC',
  BankcodeAsc = 'BANKCODE_ASC',
  IdAsc = '_ID_ASC',
  AccountnameDesc = 'ACCOUNTNAME_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  BankcodeDesc = 'BANKCODE_DESC',
  BanknameAsc = 'BANKNAME_ASC',
  BanknameDesc = 'BANKNAME_DESC',
  UpdatedatDesc = 'UPDATEDAT_DESC'
}

export type BankAccountUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt_unset?: Maybe<Scalars['Boolean']>;
  bankCode?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  bankName?: Maybe<Scalars['String']>;
  createdAt_unset?: Maybe<Scalars['Boolean']>;
  accountNumber_unset?: Maybe<Scalars['Boolean']>;
  bankName_unset?: Maybe<Scalars['Boolean']>;
  accountName_unset?: Maybe<Scalars['Boolean']>;
  accountNumber?: Maybe<Scalars['String']>;
  bankCode_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  accountName?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
};


export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  deletedCount: Scalars['Int'];
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteManyBankAccounts?: Maybe<DeleteManyPayload>;
  deleteManyNotifications?: Maybe<DeleteManyPayload>;
  deleteManySongs?: Maybe<DeleteManyPayload>;
  deleteManySubscriptions?: Maybe<DeleteManyPayload>;
  deleteManyTransactions?: Maybe<DeleteManyPayload>;
  deleteManyUsers?: Maybe<DeleteManyPayload>;
  deleteOneBankAccount?: Maybe<BankAccount>;
  deleteOneNotification?: Maybe<Notification>;
  deleteOneSong?: Maybe<Song>;
  deleteOneSubscription?: Maybe<Subscription>;
  deleteOneTransaction?: Maybe<Transaction>;
  deleteOneUser?: Maybe<User>;
  insertManyBankAccounts?: Maybe<InsertManyPayload>;
  insertManyNotifications?: Maybe<InsertManyPayload>;
  insertManySongs?: Maybe<InsertManyPayload>;
  insertManySubscriptions?: Maybe<InsertManyPayload>;
  insertManyTransactions?: Maybe<InsertManyPayload>;
  insertManyUsers?: Maybe<InsertManyPayload>;
  insertOneBankAccount?: Maybe<BankAccount>;
  insertOneNotification?: Maybe<Notification>;
  insertOneSong?: Maybe<Song>;
  insertOneSubscription?: Maybe<Subscription>;
  insertOneTransaction?: Maybe<Transaction>;
  insertOneUser?: Maybe<User>;
  replaceOneBankAccount?: Maybe<BankAccount>;
  replaceOneNotification?: Maybe<Notification>;
  replaceOneSong?: Maybe<Song>;
  replaceOneSubscription?: Maybe<Subscription>;
  replaceOneTransaction?: Maybe<Transaction>;
  replaceOneUser?: Maybe<User>;
  updateManyBankAccounts?: Maybe<UpdateManyPayload>;
  updateManyNotifications?: Maybe<UpdateManyPayload>;
  updateManySongs?: Maybe<UpdateManyPayload>;
  updateManySubscriptions?: Maybe<UpdateManyPayload>;
  updateManyTransactions?: Maybe<UpdateManyPayload>;
  updateManyUsers?: Maybe<UpdateManyPayload>;
  updateOneBankAccount?: Maybe<BankAccount>;
  updateOneNotification?: Maybe<Notification>;
  updateOneSong?: Maybe<Song>;
  updateOneSubscription?: Maybe<Subscription>;
  updateOneTransaction?: Maybe<Transaction>;
  updateOneUser?: Maybe<User>;
  upsertOneBankAccount?: Maybe<BankAccount>;
  upsertOneNotification?: Maybe<Notification>;
  upsertOneSong?: Maybe<Song>;
  upsertOneSubscription?: Maybe<Subscription>;
  upsertOneTransaction?: Maybe<Transaction>;
  upsertOneUser?: Maybe<User>;
};


export type MutationDeleteManyBankAccountsArgs = {
  query?: Maybe<BankAccountQueryInput>;
};


export type MutationDeleteManyNotificationsArgs = {
  query?: Maybe<NotificationQueryInput>;
};


export type MutationDeleteManySongsArgs = {
  query?: Maybe<SongQueryInput>;
};


export type MutationDeleteManySubscriptionsArgs = {
  query?: Maybe<SubscriptionQueryInput>;
};


export type MutationDeleteManyTransactionsArgs = {
  query?: Maybe<TransactionQueryInput>;
};


export type MutationDeleteManyUsersArgs = {
  query?: Maybe<UserQueryInput>;
};


export type MutationDeleteOneBankAccountArgs = {
  query: BankAccountQueryInput;
};


export type MutationDeleteOneNotificationArgs = {
  query: NotificationQueryInput;
};


export type MutationDeleteOneSongArgs = {
  query: SongQueryInput;
};


export type MutationDeleteOneSubscriptionArgs = {
  query: SubscriptionQueryInput;
};


export type MutationDeleteOneTransactionArgs = {
  query: TransactionQueryInput;
};


export type MutationDeleteOneUserArgs = {
  query: UserQueryInput;
};


export type MutationInsertManyBankAccountsArgs = {
  data: Array<BankAccountInsertInput>;
};


export type MutationInsertManyNotificationsArgs = {
  data: Array<NotificationInsertInput>;
};


export type MutationInsertManySongsArgs = {
  data: Array<SongInsertInput>;
};


export type MutationInsertManySubscriptionsArgs = {
  data: Array<SubscriptionInsertInput>;
};


export type MutationInsertManyTransactionsArgs = {
  data: Array<TransactionInsertInput>;
};


export type MutationInsertManyUsersArgs = {
  data: Array<UserInsertInput>;
};


export type MutationInsertOneBankAccountArgs = {
  data: BankAccountInsertInput;
};


export type MutationInsertOneNotificationArgs = {
  data: NotificationInsertInput;
};


export type MutationInsertOneSongArgs = {
  data: SongInsertInput;
};


export type MutationInsertOneSubscriptionArgs = {
  data: SubscriptionInsertInput;
};


export type MutationInsertOneTransactionArgs = {
  data: TransactionInsertInput;
};


export type MutationInsertOneUserArgs = {
  data: UserInsertInput;
};


export type MutationReplaceOneBankAccountArgs = {
  query?: Maybe<BankAccountQueryInput>;
  data: BankAccountInsertInput;
};


export type MutationReplaceOneNotificationArgs = {
  query?: Maybe<NotificationQueryInput>;
  data: NotificationInsertInput;
};


export type MutationReplaceOneSongArgs = {
  query?: Maybe<SongQueryInput>;
  data: SongInsertInput;
};


export type MutationReplaceOneSubscriptionArgs = {
  data: SubscriptionInsertInput;
  query?: Maybe<SubscriptionQueryInput>;
};


export type MutationReplaceOneTransactionArgs = {
  query?: Maybe<TransactionQueryInput>;
  data: TransactionInsertInput;
};


export type MutationReplaceOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
};


export type MutationUpdateManyBankAccountsArgs = {
  query?: Maybe<BankAccountQueryInput>;
  set: BankAccountUpdateInput;
};


export type MutationUpdateManyNotificationsArgs = {
  query?: Maybe<NotificationQueryInput>;
  set: NotificationUpdateInput;
};


export type MutationUpdateManySongsArgs = {
  query?: Maybe<SongQueryInput>;
  set: SongUpdateInput;
};


export type MutationUpdateManySubscriptionsArgs = {
  query?: Maybe<SubscriptionQueryInput>;
  set: SubscriptionUpdateInput;
};


export type MutationUpdateManyTransactionsArgs = {
  query?: Maybe<TransactionQueryInput>;
  set: TransactionUpdateInput;
};


export type MutationUpdateManyUsersArgs = {
  set: UserUpdateInput;
  query?: Maybe<UserQueryInput>;
};


export type MutationUpdateOneBankAccountArgs = {
  query?: Maybe<BankAccountQueryInput>;
  set: BankAccountUpdateInput;
};


export type MutationUpdateOneNotificationArgs = {
  query?: Maybe<NotificationQueryInput>;
  set: NotificationUpdateInput;
};


export type MutationUpdateOneSongArgs = {
  set: SongUpdateInput;
  query?: Maybe<SongQueryInput>;
};


export type MutationUpdateOneSubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>;
  set: SubscriptionUpdateInput;
};


export type MutationUpdateOneTransactionArgs = {
  set: TransactionUpdateInput;
  query?: Maybe<TransactionQueryInput>;
};


export type MutationUpdateOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  set: UserUpdateInput;
};


export type MutationUpsertOneBankAccountArgs = {
  query?: Maybe<BankAccountQueryInput>;
  data: BankAccountInsertInput;
};


export type MutationUpsertOneNotificationArgs = {
  query?: Maybe<NotificationQueryInput>;
  data: NotificationInsertInput;
};


export type MutationUpsertOneSongArgs = {
  query?: Maybe<SongQueryInput>;
  data: SongInsertInput;
};


export type MutationUpsertOneSubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>;
  data: SubscriptionInsertInput;
};


export type MutationUpsertOneTransactionArgs = {
  query?: Maybe<TransactionQueryInput>;
  data: TransactionInsertInput;
};


export type MutationUpsertOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
};

export type Notification = {
  __typename?: 'Notification';
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  user?: Maybe<User>;
};

export type NotificationInsertInput = {
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  user?: Maybe<NotificationUserRelationInput>;
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type NotificationQueryInput = {
  AND?: Maybe<Array<NotificationQueryInput>>;
  description_lte?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  keywords_exists?: Maybe<Scalars['Boolean']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  keywords_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_ne?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_ne?: Maybe<Scalars['DateTime']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  OR?: Maybe<Array<NotificationQueryInput>>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  description_gte?: Maybe<Scalars['String']>;
  description_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  createdAt_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  description_gt?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_exists?: Maybe<Scalars['Boolean']>;
  user_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_lt?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  keywords_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserQueryInput>;
};

export enum NotificationSortByInput {
  DescriptionDesc = 'DESCRIPTION_DESC',
  UserAsc = 'USER_ASC',
  UserDesc = 'USER_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC'
}

export type NotificationUpdateInput = {
  description?: Maybe<Scalars['String']>;
  description_unset?: Maybe<Scalars['Boolean']>;
  keywords_unset?: Maybe<Scalars['Boolean']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  user_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  user?: Maybe<NotificationUserRelationInput>;
};

export type NotificationUserRelationInput = {
  create?: Maybe<UserInsertInput>;
  link?: Maybe<Scalars['ObjectId']>;
};


export type Query = {
  __typename?: 'Query';
  bankAccount?: Maybe<BankAccount>;
  bankAccounts: Array<Maybe<BankAccount>>;
  notification?: Maybe<Notification>;
  notifications: Array<Maybe<Notification>>;
  song?: Maybe<Song>;
  songs: Array<Maybe<Song>>;
  subscription?: Maybe<Subscription>;
  subscriptions: Array<Maybe<Subscription>>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Maybe<Transaction>>;
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
};


export type QueryBankAccountArgs = {
  query?: Maybe<BankAccountQueryInput>;
};


export type QueryBankAccountsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<BankAccountSortByInput>;
  query?: Maybe<BankAccountQueryInput>;
};


export type QueryNotificationArgs = {
  query?: Maybe<NotificationQueryInput>;
};


export type QueryNotificationsArgs = {
  query?: Maybe<NotificationQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<NotificationSortByInput>;
};


export type QuerySongArgs = {
  query?: Maybe<SongQueryInput>;
};


export type QuerySongsArgs = {
  query?: Maybe<SongQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SongSortByInput>;
};


export type QuerySubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>;
};


export type QuerySubscriptionsArgs = {
  query?: Maybe<SubscriptionQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SubscriptionSortByInput>;
};


export type QueryTransactionArgs = {
  query?: Maybe<TransactionQueryInput>;
};


export type QueryTransactionsArgs = {
  sortBy?: Maybe<TransactionSortByInput>;
  query?: Maybe<TransactionQueryInput>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  query?: Maybe<UserQueryInput>;
};


export type QueryUsersArgs = {
  query?: Maybe<UserQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<UserSortByInput>;
};

export type Song = {
  __typename?: 'Song';
  _id?: Maybe<Scalars['ObjectId']>;
  artWork?: Maybe<Scalars['String']>;
  artiste?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creatives?: Maybe<Scalars['String']>;
  genre?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  lyrics?: Maybe<Scalars['String']>;
  music?: Maybe<Scalars['String']>;
  musicLink?: Maybe<Scalars['String']>;
  previouslyReleased?: Maybe<Scalars['Boolean']>;
  releasedOn?: Maybe<Scalars['DateTime']>;
  secondaryGenre?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  upcEan?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  worldwide?: Maybe<Scalars['Boolean']>;
  writer?: Maybe<Scalars['String']>;
};

export type SongInsertInput = {
  writer?: Maybe<Scalars['String']>;
  artiste?: Maybe<Scalars['String']>;
  releasedOn?: Maybe<Scalars['DateTime']>;
  _id?: Maybe<Scalars['ObjectId']>;
  secondaryGenre?: Maybe<Scalars['String']>;
  artWork?: Maybe<Scalars['String']>;
  music?: Maybe<Scalars['String']>;
  musicLink?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  worldwide?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  genre?: Maybe<Scalars['String']>;
  lyrics?: Maybe<Scalars['String']>;
  previouslyReleased?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  creatives?: Maybe<Scalars['String']>;
  upcEan?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<SongUserRelationInput>;
};

export type SongQueryInput = {
  label_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  location_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_gte?: Maybe<Scalars['String']>;
  upcEan_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_exists?: Maybe<Scalars['Boolean']>;
  releasedOn_gte?: Maybe<Scalars['DateTime']>;
  title_lte?: Maybe<Scalars['String']>;
  secondaryGenre_gte?: Maybe<Scalars['String']>;
  createdAt_ne?: Maybe<Scalars['DateTime']>;
  genre_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_exists?: Maybe<Scalars['Boolean']>;
  artWork_gt?: Maybe<Scalars['String']>;
  artWork_gte?: Maybe<Scalars['String']>;
  writer?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  worldwide_ne?: Maybe<Scalars['Boolean']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  lyrics_gt?: Maybe<Scalars['String']>;
  artiste_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  upcEan_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  musicLink_exists?: Maybe<Scalars['Boolean']>;
  label_lte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  releasedOn_exists?: Maybe<Scalars['Boolean']>;
  upcEan_ne?: Maybe<Scalars['String']>;
  musicLink_lte?: Maybe<Scalars['String']>;
  writer_lt?: Maybe<Scalars['String']>;
  label_gte?: Maybe<Scalars['String']>;
  secondaryGenre_lte?: Maybe<Scalars['String']>;
  location_gte?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  genre_gt?: Maybe<Scalars['String']>;
  secondaryGenre_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<SongQueryInput>>;
  music_exists?: Maybe<Scalars['Boolean']>;
  createdAt_exists?: Maybe<Scalars['Boolean']>;
  music_gte?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  music_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  type_lte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  artWork_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  releasedOn_lte?: Maybe<Scalars['DateTime']>;
  musicLink_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  label_exists?: Maybe<Scalars['Boolean']>;
  lyrics?: Maybe<Scalars['String']>;
  releasedOn_ne?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  lyrics_lte?: Maybe<Scalars['String']>;
  label_gt?: Maybe<Scalars['String']>;
  lyrics_lt?: Maybe<Scalars['String']>;
  location_gt?: Maybe<Scalars['String']>;
  genre_ne?: Maybe<Scalars['String']>;
  title_ne?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  upcEan?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  title_gt?: Maybe<Scalars['String']>;
  creatives_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  label_ne?: Maybe<Scalars['String']>;
  creatives?: Maybe<Scalars['String']>;
  musicLink_gte?: Maybe<Scalars['String']>;
  type_ne?: Maybe<Scalars['String']>;
  secondaryGenre_ne?: Maybe<Scalars['String']>;
  artiste_ne?: Maybe<Scalars['String']>;
  creatives_lte?: Maybe<Scalars['String']>;
  createdAt_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  previouslyReleased_ne?: Maybe<Scalars['Boolean']>;
  artiste?: Maybe<Scalars['String']>;
  genre_lte?: Maybe<Scalars['String']>;
  music_gt?: Maybe<Scalars['String']>;
  worldwide?: Maybe<Scalars['Boolean']>;
  writer_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  upcEan_lt?: Maybe<Scalars['String']>;
  releasedOn?: Maybe<Scalars['DateTime']>;
  type_lt?: Maybe<Scalars['String']>;
  updatedAt_ne?: Maybe<Scalars['DateTime']>;
  artiste_lte?: Maybe<Scalars['String']>;
  artWork_ne?: Maybe<Scalars['String']>;
  releasedOn_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  location_exists?: Maybe<Scalars['Boolean']>;
  genre_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lyrics_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  artWork_exists?: Maybe<Scalars['Boolean']>;
  user_exists?: Maybe<Scalars['Boolean']>;
  location_ne?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  secondaryGenre_lt?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  user?: Maybe<UserQueryInput>;
  title?: Maybe<Scalars['String']>;
  writer_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
  creatives_exists?: Maybe<Scalars['Boolean']>;
  musicLink_gt?: Maybe<Scalars['String']>;
  musicLink_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  worldwide_exists?: Maybe<Scalars['Boolean']>;
  musicLink_ne?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  artWork?: Maybe<Scalars['String']>;
  releasedOn_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  label?: Maybe<Scalars['String']>;
  genre_lt?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  writer_lte?: Maybe<Scalars['String']>;
  writer_gte?: Maybe<Scalars['String']>;
  title_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  creatives_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  creatives_ne?: Maybe<Scalars['String']>;
  writer_gt?: Maybe<Scalars['String']>;
  secondaryGenre_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  creatives_lt?: Maybe<Scalars['String']>;
  artiste_gte?: Maybe<Scalars['String']>;
  location_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  location_lte?: Maybe<Scalars['String']>;
  artiste_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  location?: Maybe<Scalars['String']>;
  genre_exists?: Maybe<Scalars['Boolean']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  music_lte?: Maybe<Scalars['String']>;
  artiste_gt?: Maybe<Scalars['String']>;
  music?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_gt?: Maybe<Scalars['String']>;
  lyrics_gte?: Maybe<Scalars['String']>;
  previouslyReleased?: Maybe<Scalars['Boolean']>;
  creatives_gte?: Maybe<Scalars['String']>;
  secondaryGenre_gt?: Maybe<Scalars['String']>;
  writer_exists?: Maybe<Scalars['Boolean']>;
  lyrics_exists?: Maybe<Scalars['Boolean']>;
  releasedOn_lt?: Maybe<Scalars['DateTime']>;
  creatives_gt?: Maybe<Scalars['String']>;
  lyrics_ne?: Maybe<Scalars['String']>;
  writer_ne?: Maybe<Scalars['String']>;
  artWork_lt?: Maybe<Scalars['String']>;
  artiste_exists?: Maybe<Scalars['Boolean']>;
  genre?: Maybe<Scalars['String']>;
  title_lt?: Maybe<Scalars['String']>;
  type_exists?: Maybe<Scalars['Boolean']>;
  musicLink_lt?: Maybe<Scalars['String']>;
  music_ne?: Maybe<Scalars['String']>;
  lyrics_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  secondaryGenre?: Maybe<Scalars['String']>;
  upcEan_gte?: Maybe<Scalars['String']>;
  artWork_lte?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<SongQueryInput>>;
  type_gte?: Maybe<Scalars['String']>;
  label_lt?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  artWork_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  label_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  music_lt?: Maybe<Scalars['String']>;
  type_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  location_lt?: Maybe<Scalars['String']>;
  upcEan_exists?: Maybe<Scalars['Boolean']>;
  upcEan_gt?: Maybe<Scalars['String']>;
  releasedOn_gt?: Maybe<Scalars['DateTime']>;
  music_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  previouslyReleased_exists?: Maybe<Scalars['Boolean']>;
  musicLink?: Maybe<Scalars['String']>;
  upcEan_lte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  genre_gte?: Maybe<Scalars['String']>;
  secondaryGenre_exists?: Maybe<Scalars['Boolean']>;
  artiste_lt?: Maybe<Scalars['String']>;
};

export enum SongSortByInput {
  WriterDesc = 'WRITER_DESC',
  IdDesc = '_ID_DESC',
  GenreDesc = 'GENRE_DESC',
  MusiclinkAsc = 'MUSICLINK_ASC',
  UpceanAsc = 'UPCEAN_ASC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  IdAsc = '_ID_ASC',
  LabelAsc = 'LABEL_ASC',
  LocationAsc = 'LOCATION_ASC',
  ReleasedonAsc = 'RELEASEDON_ASC',
  SecondarygenreDesc = 'SECONDARYGENRE_DESC',
  CreativesAsc = 'CREATIVES_ASC',
  MusicDesc = 'MUSIC_DESC',
  MusiclinkDesc = 'MUSICLINK_DESC',
  SecondarygenreAsc = 'SECONDARYGENRE_ASC',
  LabelDesc = 'LABEL_DESC',
  TitleDesc = 'TITLE_DESC',
  UserDesc = 'USER_DESC',
  LyricsAsc = 'LYRICS_ASC',
  LyricsDesc = 'LYRICS_DESC',
  UserAsc = 'USER_ASC',
  ArtworkAsc = 'ARTWORK_ASC',
  ArtisteDesc = 'ARTISTE_DESC',
  CreatedatDesc = 'CREATEDAT_DESC',
  GenreAsc = 'GENRE_ASC',
  ArtworkDesc = 'ARTWORK_DESC',
  CreativesDesc = 'CREATIVES_DESC',
  TypeAsc = 'TYPE_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  LocationDesc = 'LOCATION_DESC',
  TitleAsc = 'TITLE_ASC',
  UpceanDesc = 'UPCEAN_DESC',
  WriterAsc = 'WRITER_ASC',
  TypeDesc = 'TYPE_DESC',
  ArtisteAsc = 'ARTISTE_ASC',
  CreatedatAsc = 'CREATEDAT_ASC',
  MusicAsc = 'MUSIC_ASC',
  ReleasedonDesc = 'RELEASEDON_DESC'
}

export type SongUpdateInput = {
  musicLink_unset?: Maybe<Scalars['Boolean']>;
  creatives?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  releasedOn?: Maybe<Scalars['DateTime']>;
  title_unset?: Maybe<Scalars['Boolean']>;
  writer_unset?: Maybe<Scalars['Boolean']>;
  upcEan_unset?: Maybe<Scalars['Boolean']>;
  artWork?: Maybe<Scalars['String']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  artWork_unset?: Maybe<Scalars['Boolean']>;
  music?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  previouslyReleased_unset?: Maybe<Scalars['Boolean']>;
  worldwide?: Maybe<Scalars['Boolean']>;
  writer?: Maybe<Scalars['String']>;
  user?: Maybe<SongUserRelationInput>;
  user_unset?: Maybe<Scalars['Boolean']>;
  previouslyReleased?: Maybe<Scalars['Boolean']>;
  secondaryGenre_unset?: Maybe<Scalars['Boolean']>;
  createdAt_unset?: Maybe<Scalars['Boolean']>;
  location_unset?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  secondaryGenre?: Maybe<Scalars['String']>;
  lyrics?: Maybe<Scalars['String']>;
  upcEan?: Maybe<Scalars['String']>;
  lyrics_unset?: Maybe<Scalars['Boolean']>;
  updatedAt_unset?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  artiste_unset?: Maybe<Scalars['Boolean']>;
  releasedOn_unset?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  music_unset?: Maybe<Scalars['Boolean']>;
  genre?: Maybe<Scalars['String']>;
  genre_unset?: Maybe<Scalars['Boolean']>;
  worldwide_unset?: Maybe<Scalars['Boolean']>;
  musicLink?: Maybe<Scalars['String']>;
  label_unset?: Maybe<Scalars['Boolean']>;
  artiste?: Maybe<Scalars['String']>;
  creatives_unset?: Maybe<Scalars['Boolean']>;
  type_unset?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type SongUserRelationInput = {
  link?: Maybe<Scalars['ObjectId']>;
  create?: Maybe<UserInsertInput>;
};

export type Subscription = {
  __typename?: 'Subscription';
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Int']>;
  tier?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SubscriptionInsertInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Int']>;
  tier?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  _id?: Maybe<Scalars['ObjectId']>;
};

export type SubscriptionQueryInput = {
  _id_exists?: Maybe<Scalars['Boolean']>;
  tier_gt?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  tier_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  tier_ne?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  OR?: Maybe<Array<SubscriptionQueryInput>>;
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt_ne?: Maybe<Scalars['DateTime']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  tier_lt?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  price_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tier_gte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  tier?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_exists?: Maybe<Scalars['Boolean']>;
  tier_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  price_ne?: Maybe<Scalars['Int']>;
  tier_lte?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  price_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  AND?: Maybe<Array<SubscriptionQueryInput>>;
  price?: Maybe<Scalars['Int']>;
  price_lt?: Maybe<Scalars['Int']>;
  updatedAt_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  price_exists?: Maybe<Scalars['Boolean']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  price_lte?: Maybe<Scalars['Int']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  tier_exists?: Maybe<Scalars['Boolean']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_exists?: Maybe<Scalars['Boolean']>;
  price_gte?: Maybe<Scalars['Int']>;
  price_gt?: Maybe<Scalars['Int']>;
  updatedAt_ne?: Maybe<Scalars['DateTime']>;
};

export enum SubscriptionSortByInput {
  UpdatedatAsc = 'UPDATEDAT_ASC',
  IdAsc = '_ID_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  TierAsc = 'TIER_ASC',
  TierDesc = 'TIER_DESC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC'
}

export type SubscriptionUpdateInput = {
  createdAt_unset?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Int']>;
  tier_unset?: Maybe<Scalars['Boolean']>;
  updatedAt_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  price_inc?: Maybe<Scalars['Int']>;
  price_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  tier?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  _id?: Maybe<Scalars['ObjectId']>;
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type TransactionInsertInput = {
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<TransactionUserRelationInput>;
  _id?: Maybe<Scalars['ObjectId']>;
};

export type TransactionQueryInput = {
  OR?: Maybe<Array<TransactionQueryInput>>;
  amount_lt?: Maybe<Scalars['Float']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_exists?: Maybe<Scalars['Boolean']>;
  type_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  amount_gt?: Maybe<Scalars['Float']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  type?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  type_lte?: Maybe<Scalars['String']>;
  amount_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  amount_gte?: Maybe<Scalars['Float']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  type_gt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_ne?: Maybe<Scalars['DateTime']>;
  type_ne?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  type_gte?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  updatedAt_ne?: Maybe<Scalars['DateTime']>;
  user_exists?: Maybe<Scalars['Boolean']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  amount_nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  updatedAt_exists?: Maybe<Scalars['Boolean']>;
  type_exists?: Maybe<Scalars['Boolean']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserQueryInput>;
  amount_ne?: Maybe<Scalars['Float']>;
  amount_lte?: Maybe<Scalars['Float']>;
  amount_exists?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<TransactionQueryInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  amount?: Maybe<Scalars['Float']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  type_lt?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  type_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
};

export enum TransactionSortByInput {
  IdDesc = '_ID_DESC',
  AmountDesc = 'AMOUNT_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  UserAsc = 'USER_ASC',
  IdAsc = '_ID_ASC',
  AmountAsc = 'AMOUNT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  UserDesc = 'USER_DESC'
}

export type TransactionUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  type_unset?: Maybe<Scalars['Boolean']>;
  amount_inc?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['ObjectId']>;
  amount?: Maybe<Scalars['Float']>;
  user_unset?: Maybe<Scalars['Boolean']>;
  updatedAt_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  amount_unset?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_unset?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<TransactionUserRelationInput>;
};

export type TransactionUserRelationInput = {
  create?: Maybe<UserInsertInput>;
  link?: Maybe<Scalars['ObjectId']>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ObjectId']>;
  avatar?: Maybe<Scalars['String']>;
  bankAccount?: Maybe<BankAccount>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  downloads?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  notifications?: Maybe<Array<Maybe<Notification>>>;
  pendingNotifications?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  sales?: Maybe<Scalars['Int']>;
  songs?: Maybe<Array<Maybe<Song>>>;
  streams?: Maybe<Scalars['Int']>;
  subscription?: Maybe<UserSubscription>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  twitter?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
  walletBalance?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

export type UserBankAccountRelationInput = {
  create?: Maybe<BankAccountInsertInput>;
  link?: Maybe<Scalars['ObjectId']>;
};

export type UserInsertInput = {
  phone?: Maybe<Scalars['String']>;
  pendingNotifications?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  subscription?: Maybe<UserSubscriptionInsertInput>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  downloads?: Maybe<Scalars['Int']>;
  songs?: Maybe<UserSongsRelationInput>;
  sales?: Maybe<Scalars['Int']>;
  bankAccount?: Maybe<UserBankAccountRelationInput>;
  country?: Maybe<Scalars['String']>;
  transactions?: Maybe<UserTransactionsRelationInput>;
  uid?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
  walletBalance?: Maybe<Scalars['String']>;
  notifications?: Maybe<UserNotificationsRelationInput>;
  streams?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['ObjectId']>;
  username?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserNotificationsRelationInput = {
  create?: Maybe<Array<Maybe<NotificationInsertInput>>>;
  link?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
};

export type UserQueryInput = {
  youtube_gte?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  downloads_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  downloads_exists?: Maybe<Scalars['Boolean']>;
  uid_gt?: Maybe<Scalars['String']>;
  views_gte?: Maybe<Scalars['Int']>;
  lastLogin_lte?: Maybe<Scalars['DateTime']>;
  username_exists?: Maybe<Scalars['Boolean']>;
  streams?: Maybe<Scalars['Int']>;
  firstName_gt?: Maybe<Scalars['String']>;
  uid_lt?: Maybe<Scalars['String']>;
  uid_gte?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
  country_ne?: Maybe<Scalars['String']>;
  youtube_lte?: Maybe<Scalars['String']>;
  walletBalance_gt?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  twitter_gte?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  sales_exists?: Maybe<Scalars['Boolean']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  sales_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  facebook_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  songs_in?: Maybe<Array<Maybe<SongQueryInput>>>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastLogin_exists?: Maybe<Scalars['Boolean']>;
  downloads_gte?: Maybe<Scalars['Int']>;
  lastLogin_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  uid_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  gender_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  username?: Maybe<Scalars['String']>;
  streams_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  instagram_lte?: Maybe<Scalars['String']>;
  firstName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  downloads?: Maybe<Scalars['Int']>;
  uid_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_ne?: Maybe<Scalars['String']>;
  walletBalance_lt?: Maybe<Scalars['String']>;
  instagram_exists?: Maybe<Scalars['Boolean']>;
  downloads_lte?: Maybe<Scalars['Int']>;
  gender_ne?: Maybe<Scalars['String']>;
  createdAt_ne?: Maybe<Scalars['DateTime']>;
  sales_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  views_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  twitter_exists?: Maybe<Scalars['Boolean']>;
  phone_gt?: Maybe<Scalars['String']>;
  subscription?: Maybe<UserSubscriptionQueryInput>;
  createdAt_exists?: Maybe<Scalars['Boolean']>;
  walletBalance_ne?: Maybe<Scalars['String']>;
  lastName_gt?: Maybe<Scalars['String']>;
  streams_ne?: Maybe<Scalars['Int']>;
  twitter?: Maybe<Scalars['String']>;
  email_gte?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  facebook?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  downloads_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  firstName_ne?: Maybe<Scalars['String']>;
  country_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  songs_nin?: Maybe<Array<Maybe<SongQueryInput>>>;
  youtube_gt?: Maybe<Scalars['String']>;
  transactions?: Maybe<Array<Maybe<TransactionQueryInput>>>;
  email_lte?: Maybe<Scalars['String']>;
  updatedAt_exists?: Maybe<Scalars['Boolean']>;
  gender_exists?: Maybe<Scalars['Boolean']>;
  twitter_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebook_exists?: Maybe<Scalars['Boolean']>;
  avatar_exists?: Maybe<Scalars['Boolean']>;
  avatar_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone?: Maybe<Scalars['String']>;
  uid_exists?: Maybe<Scalars['Boolean']>;
  youtube_exists?: Maybe<Scalars['Boolean']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  facebook_gte?: Maybe<Scalars['String']>;
  uid_lte?: Maybe<Scalars['String']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  country?: Maybe<Scalars['String']>;
  youtube_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  walletBalance_exists?: Maybe<Scalars['Boolean']>;
  lastName_exists?: Maybe<Scalars['Boolean']>;
  sales_lte?: Maybe<Scalars['Int']>;
  instagram_lt?: Maybe<Scalars['String']>;
  notifications_in?: Maybe<Array<Maybe<NotificationQueryInput>>>;
  sales?: Maybe<Scalars['Int']>;
  avatar_gt?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  OR?: Maybe<Array<UserQueryInput>>;
  youtube_lt?: Maybe<Scalars['String']>;
  facebook_lte?: Maybe<Scalars['String']>;
  youtube_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebook_gt?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  subscription_exists?: Maybe<Scalars['Boolean']>;
  streams_gt?: Maybe<Scalars['Int']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  country_gte?: Maybe<Scalars['String']>;
  gender_lte?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  facebook_ne?: Maybe<Scalars['String']>;
  views_lte?: Maybe<Scalars['Int']>;
  firstName_gte?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  country_lt?: Maybe<Scalars['String']>;
  views_lt?: Maybe<Scalars['Int']>;
  walletBalance_lte?: Maybe<Scalars['String']>;
  country_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  pendingNotifications?: Maybe<Scalars['Boolean']>;
  username_lte?: Maybe<Scalars['String']>;
  firstName_lt?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  firstName_lte?: Maybe<Scalars['String']>;
  pendingNotifications_exists?: Maybe<Scalars['Boolean']>;
  createdAt_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  avatar_lte?: Maybe<Scalars['String']>;
  firstName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  username_gt?: Maybe<Scalars['String']>;
  gender_lt?: Maybe<Scalars['String']>;
  streams_exists?: Maybe<Scalars['Boolean']>;
  lastName_gte?: Maybe<Scalars['String']>;
  twitter_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastLogin_lt?: Maybe<Scalars['DateTime']>;
  transactions_exists?: Maybe<Scalars['Boolean']>;
  sales_lt?: Maybe<Scalars['Int']>;
  sales_gte?: Maybe<Scalars['Int']>;
  streams_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lastName_lt?: Maybe<Scalars['String']>;
  bankAccount_exists?: Maybe<Scalars['Boolean']>;
  streams_lte?: Maybe<Scalars['Int']>;
  country_gt?: Maybe<Scalars['String']>;
  gender_gte?: Maybe<Scalars['String']>;
  updatedAt_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lastName_lte?: Maybe<Scalars['String']>;
  facebook_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitter_gt?: Maybe<Scalars['String']>;
  songs_exists?: Maybe<Scalars['Boolean']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  email_gt?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  email_lt?: Maybe<Scalars['String']>;
  notifications?: Maybe<Array<Maybe<NotificationQueryInput>>>;
  walletBalance_gte?: Maybe<Scalars['String']>;
  walletBalance?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  pendingNotifications_ne?: Maybe<Scalars['Boolean']>;
  username_gte?: Maybe<Scalars['String']>;
  phone_gte?: Maybe<Scalars['String']>;
  transactions_in?: Maybe<Array<Maybe<TransactionQueryInput>>>;
  country_lte?: Maybe<Scalars['String']>;
  instagram_gte?: Maybe<Scalars['String']>;
  downloads_ne?: Maybe<Scalars['Int']>;
  country_exists?: Maybe<Scalars['Boolean']>;
  username_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<UserQueryInput>>;
  firstName_exists?: Maybe<Scalars['Boolean']>;
  sales_ne?: Maybe<Scalars['Int']>;
  views_exists?: Maybe<Scalars['Boolean']>;
  instagram?: Maybe<Scalars['String']>;
  streams_gte?: Maybe<Scalars['Int']>;
  youtube?: Maybe<Scalars['String']>;
  songs?: Maybe<Array<Maybe<SongQueryInput>>>;
  lastName_ne?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  notifications_nin?: Maybe<Array<Maybe<NotificationQueryInput>>>;
  phone_exists?: Maybe<Scalars['Boolean']>;
  walletBalance_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notifications_exists?: Maybe<Scalars['Boolean']>;
  twitter_ne?: Maybe<Scalars['String']>;
  phone_ne?: Maybe<Scalars['String']>;
  lastLogin_gt?: Maybe<Scalars['DateTime']>;
  gender_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  avatar_gte?: Maybe<Scalars['String']>;
  downloads_gt?: Maybe<Scalars['Int']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  walletBalance_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone_lte?: Maybe<Scalars['String']>;
  lastLogin_gte?: Maybe<Scalars['DateTime']>;
  instagram_gt?: Maybe<Scalars['String']>;
  lastLogin_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  avatar_ne?: Maybe<Scalars['String']>;
  lastLogin_ne?: Maybe<Scalars['DateTime']>;
  avatar_lt?: Maybe<Scalars['String']>;
  twitter_lt?: Maybe<Scalars['String']>;
  sales_gt?: Maybe<Scalars['Int']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  transactions_nin?: Maybe<Array<Maybe<TransactionQueryInput>>>;
  username_lt?: Maybe<Scalars['String']>;
  twitter_lte?: Maybe<Scalars['String']>;
  views_ne?: Maybe<Scalars['Int']>;
  uid_ne?: Maybe<Scalars['String']>;
  streams_lt?: Maybe<Scalars['Int']>;
  updatedAt_ne?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  avatar_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender_gt?: Maybe<Scalars['String']>;
  username_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  downloads_lt?: Maybe<Scalars['Int']>;
  lastName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  instagram_ne?: Maybe<Scalars['String']>;
  phone_lt?: Maybe<Scalars['String']>;
  username_ne?: Maybe<Scalars['String']>;
  views_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  instagram_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  youtube_ne?: Maybe<Scalars['String']>;
  views_gt?: Maybe<Scalars['Int']>;
  phone_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebook_lt?: Maybe<Scalars['String']>;
  instagram_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  bankAccount?: Maybe<BankAccountQueryInput>;
};

export type UserSongsRelationInput = {
  create?: Maybe<Array<Maybe<SongInsertInput>>>;
  link?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
};

export enum UserSortByInput {
  IdDesc = '_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  UsernameAsc = 'USERNAME_ASC',
  BankaccountDesc = 'BANKACCOUNT_DESC',
  DownloadsDesc = 'DOWNLOADS_DESC',
  InstagramAsc = 'INSTAGRAM_ASC',
  ViewsAsc = 'VIEWS_ASC',
  LastnameDesc = 'LASTNAME_DESC',
  SalesAsc = 'SALES_ASC',
  TwitterAsc = 'TWITTER_ASC',
  UidAsc = 'UID_ASC',
  DownloadsAsc = 'DOWNLOADS_ASC',
  FirstnameAsc = 'FIRSTNAME_ASC',
  GenderDesc = 'GENDER_DESC',
  InstagramDesc = 'INSTAGRAM_DESC',
  YoutubeDesc = 'YOUTUBE_DESC',
  LastloginDesc = 'LASTLOGIN_DESC',
  SalesDesc = 'SALES_DESC',
  WalletbalanceAsc = 'WALLETBALANCE_ASC',
  LastnameAsc = 'LASTNAME_ASC',
  PhoneDesc = 'PHONE_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  AvatarAsc = 'AVATAR_ASC',
  CountryAsc = 'COUNTRY_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  EmailDesc = 'EMAIL_DESC',
  StreamsDesc = 'STREAMS_DESC',
  TwitterDesc = 'TWITTER_DESC',
  UidDesc = 'UID_DESC',
  UsernameDesc = 'USERNAME_DESC',
  FacebookAsc = 'FACEBOOK_ASC',
  FirstnameDesc = 'FIRSTNAME_DESC',
  LastloginAsc = 'LASTLOGIN_ASC',
  PhoneAsc = 'PHONE_ASC',
  ViewsDesc = 'VIEWS_DESC',
  StreamsAsc = 'STREAMS_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  WalletbalanceDesc = 'WALLETBALANCE_DESC',
  AvatarDesc = 'AVATAR_DESC',
  BankaccountAsc = 'BANKACCOUNT_ASC',
  CountryDesc = 'COUNTRY_DESC',
  GenderAsc = 'GENDER_ASC',
  IdAsc = '_ID_ASC',
  CreatedatAsc = 'CREATEDAT_ASC',
  FacebookDesc = 'FACEBOOK_DESC',
  YoutubeAsc = 'YOUTUBE_ASC'
}

export type UserSubscription = {
  __typename?: 'UserSubscription';
  activatedOn?: Maybe<Scalars['DateTime']>;
  active?: Maybe<Scalars['Boolean']>;
  expiresOn?: Maybe<Scalars['DateTime']>;
  tier?: Maybe<Subscription>;
};

export type UserSubscriptionInsertInput = {
  activatedOn?: Maybe<Scalars['DateTime']>;
  active?: Maybe<Scalars['Boolean']>;
  expiresOn?: Maybe<Scalars['DateTime']>;
  tier?: Maybe<UserSubscriptionTierRelationInput>;
};

export type UserSubscriptionQueryInput = {
  expiresOn_lt?: Maybe<Scalars['DateTime']>;
  activatedOn_gte?: Maybe<Scalars['DateTime']>;
  active?: Maybe<Scalars['Boolean']>;
  activatedOn_ne?: Maybe<Scalars['DateTime']>;
  tier_exists?: Maybe<Scalars['Boolean']>;
  expiresOn_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  expiresOn_exists?: Maybe<Scalars['Boolean']>;
  expiresOn_gte?: Maybe<Scalars['DateTime']>;
  active_ne?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<UserSubscriptionQueryInput>>;
  activatedOn_lte?: Maybe<Scalars['DateTime']>;
  expiresOn?: Maybe<Scalars['DateTime']>;
  expiresOn_ne?: Maybe<Scalars['DateTime']>;
  expiresOn_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  activatedOn_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  activatedOn_gt?: Maybe<Scalars['DateTime']>;
  activatedOn?: Maybe<Scalars['DateTime']>;
  activatedOn_lt?: Maybe<Scalars['DateTime']>;
  activatedOn_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  tier?: Maybe<SubscriptionQueryInput>;
  active_exists?: Maybe<Scalars['Boolean']>;
  expiresOn_lte?: Maybe<Scalars['DateTime']>;
  expiresOn_gt?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<UserSubscriptionQueryInput>>;
  activatedOn_exists?: Maybe<Scalars['Boolean']>;
};

export type UserSubscriptionTierRelationInput = {
  link?: Maybe<Scalars['ObjectId']>;
  create?: Maybe<SubscriptionInsertInput>;
};

export type UserSubscriptionUpdateInput = {
  active?: Maybe<Scalars['Boolean']>;
  active_unset?: Maybe<Scalars['Boolean']>;
  expiresOn?: Maybe<Scalars['DateTime']>;
  expiresOn_unset?: Maybe<Scalars['Boolean']>;
  tier?: Maybe<UserSubscriptionTierRelationInput>;
  tier_unset?: Maybe<Scalars['Boolean']>;
  activatedOn?: Maybe<Scalars['DateTime']>;
  activatedOn_unset?: Maybe<Scalars['Boolean']>;
};

export type UserTransactionsRelationInput = {
  create?: Maybe<Array<Maybe<TransactionInsertInput>>>;
  link?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
};

export type UserUpdateInput = {
  streams_unset?: Maybe<Scalars['Boolean']>;
  pendingNotifications?: Maybe<Scalars['Boolean']>;
  youtube?: Maybe<Scalars['String']>;
  downloads?: Maybe<Scalars['Int']>;
  facebook?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  bankAccount?: Maybe<UserBankAccountRelationInput>;
  firstName_unset?: Maybe<Scalars['Boolean']>;
  views_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  youtube_unset?: Maybe<Scalars['Boolean']>;
  updatedAt_unset?: Maybe<Scalars['Boolean']>;
  lastLogin_unset?: Maybe<Scalars['Boolean']>;
  avatar_unset?: Maybe<Scalars['Boolean']>;
  phone_unset?: Maybe<Scalars['Boolean']>;
  facebook_unset?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  country_unset?: Maybe<Scalars['Boolean']>;
  subscription_unset?: Maybe<Scalars['Boolean']>;
  instagram?: Maybe<Scalars['String']>;
  pendingNotifications_unset?: Maybe<Scalars['Boolean']>;
  streams?: Maybe<Scalars['Int']>;
  sales?: Maybe<Scalars['Int']>;
  avatar?: Maybe<Scalars['String']>;
  notifications?: Maybe<UserNotificationsRelationInput>;
  username_unset?: Maybe<Scalars['Boolean']>;
  lastName_unset?: Maybe<Scalars['Boolean']>;
  sales_unset?: Maybe<Scalars['Boolean']>;
  views_inc?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
  songs_unset?: Maybe<Scalars['Boolean']>;
  downloads_inc?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['ObjectId']>;
  sales_inc?: Maybe<Scalars['Int']>;
  createdAt_unset?: Maybe<Scalars['Boolean']>;
  country?: Maybe<Scalars['String']>;
  uid_unset?: Maybe<Scalars['Boolean']>;
  views?: Maybe<Scalars['Int']>;
  transactions?: Maybe<UserTransactionsRelationInput>;
  uid?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  notifications_unset?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  instagram_unset?: Maybe<Scalars['Boolean']>;
  email_unset?: Maybe<Scalars['Boolean']>;
  bankAccount_unset?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['String']>;
  walletBalance?: Maybe<Scalars['String']>;
  subscription?: Maybe<UserSubscriptionUpdateInput>;
  twitter_unset?: Maybe<Scalars['Boolean']>;
  walletBalance_unset?: Maybe<Scalars['Boolean']>;
  songs?: Maybe<UserSongsRelationInput>;
  gender_unset?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Scalars['String']>;
  streams_inc?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  downloads_unset?: Maybe<Scalars['Boolean']>;
  transactions_unset?: Maybe<Scalars['Boolean']>;
};

export type InsertOneSongMutationVariables = Exact<{
  artwork: Scalars['String'];
  musicFile: Scalars['String'];
  lyricsFile?: Maybe<Scalars['String']>;
  songTitle: Scalars['String'];
  artistName: Scalars['String'];
  musicLink: Scalars['String'];
  musicType: Scalars['String'];
  primaryGenre: Scalars['String'];
  secondaryGenre: Scalars['String'];
  releasedOn: Scalars['DateTime'];
  labelName?: Maybe<Scalars['String']>;
  upcean?: Maybe<Scalars['String']>;
  recordLocation?: Maybe<Scalars['String']>;
  writer: Scalars['String'];
  creatives: Scalars['String'];
  worldwide?: Maybe<Scalars['Boolean']>;
  previouslyReleased?: Maybe<Scalars['Boolean']>;
  user: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
}>;


export type InsertOneSongMutation = (
  { __typename?: 'Mutation' }
  & { insertOneSong?: Maybe<(
    { __typename?: 'Song' }
    & Pick<Song, 'title'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'firstName'>
    )> }
  )> }
);

export type SongsQueryVariables = Exact<{ [key: string]: never; }>;


export type SongsQuery = (
  { __typename?: 'Query' }
  & { songs: Array<Maybe<(
    { __typename?: 'Song' }
    & Pick<Song, 'title'>
  )>> }
);
